import { getUserModel, getLoginModel } from "../data_access/modelFactory";
import repository from "../repositories/user-repository";
import jwt from "jsonwebtoken";
import crypto from 'crypto';
import WorldCupError from '../exception/exception';
import config from "../../settings/environment";

const generateToken = async (data) => {
    return jwt.sign(data, config.secrets.salt, { expiresIn: '1d' });
}

const decodeToken = async (token) => {
    return await jwt.verify(token, config.secrets.salt);
}

exports.save = async (data) => {

    try {

        const User = await getUserModel();
        const existingUser = await repository.getByEmail(data.email, User);

        if (existingUser) {
            throw new WorldCupError(`O e-mail ${data.email} já existe.`, 409);
        }

        await repository.create(data, User);
    }
    catch (e) {
        throw new WorldCupError(e.message, e.status);
    }
};

exports.authenticate = async (data, req) => {

    try {
        const User = await getUserModel();
        const existingUser = await repository.getByEmail(data.email, User);
        
        if (!existingUser) {
            throw new WorldCupError(`Usuario ${data.email} não cadastrado!`, 409);
        }

        const {clientIp} = req;
        console.log("clientIp", clientIp);
        const identityKey = `${data.email}-${clientIp}`;
        const Login = await getLoginModel();

        if (!await existingUser.passwordIsValid(data.password)) {
            await Login.failedLoginAttempt(identityKey);
            throw new WorldCupError("Usuário ou senha inválidos", 404);
        }

        if( !await Login.canAthenticate(identityKey)){
            throw new WorldCupError("Está conta está temporariamente bloqueada!", 500);
        }

        if( await Login.inProgress(identityKey)){
            throw new WorldCupError("Usuário já está autenticado!", 500);
        }

        console.log("successfulLoginAttempt");
        await Login.successfulLoginAttempt(identityKey);
        return await generateToken({
            id: existingUser._id,
            email: existingUser.email,
            name: existingUser.name,
            roles: existingUser.roles
        });

    } catch (e) {
        throw new WorldCupError(e.message, e.status);
    }

};

exports.refreshToken = async (token) => {
    try {

        const User = await getUserModel();
        const data = await decodeToken(token);
        const user = await repository.getById(data.id, User);

        if (!user) {
            throw new WorldCupError("Token não encontrado!", 404);
        }

        return await generateToken({
            id: user._id,
            email: user.email,
            name: user.name,
            roles: user.roles
        });
    } catch (e) {
        throw new WorldCupError(e.message, e.status);
    }
};

exports.authorize = function (req, res, next) {

    const token = req.get('authorization');
    if (!token) {
        res.json({ message: 'Acesso não permitido!', status: 401 });
    } else {
        jwt.verify(token, config.secrets.salt, (error, decoded) => {
            if (error) {
                res.json({ message: 'Token invalido!', status: 401 });
            } else {
                next();
            }
        });
    }
};

