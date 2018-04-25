import {getUserModel}       from "../data_access/modelFactory";
import repository           from "../repositories/user-repository";
import jwt                  from "jsonwebtoken";
import crypto               from 'crypto';
import WorldCupError        from '../exception/exception';
import config               from "../../settings/environment";

const generateToken = async (data) => {
    return jwt.sign(data, config.secrets.salt, { expiresIn: '1d' });
}

const decodeToken = async (token) => {
    return await jwt.verify(token, config.secrets.salt);
}

const cryptoPassword = (password) => {
    let salt        = Math.round((Date.now() * Math.random())) + '';
    let newHash     = crypto.createHash('sha512')
                                   .update(salt +  password, 'utf8')
                                   .digest('hex');

    return {
        salt   : salt,
        newHash: newHash
    }
}

const descrypPassword = (user, password) => {
    const newHash   =  crypto.createHash('sha512')
                                     .update(user.salt + password, 'utf8')
                                     .digest('hex');
    return {
        newHash: newHash
    }
}

exports.save = async (data) => {

    try {

        const User           = await getUserModel();
        const existingUser   = await repository.getByEmail(data.email, User);

        if (existingUser) {
            throw new WorldCupError(`O e-mail ${data.email} já existe.`, 409);
        }

        const newPassword = cryptoPassword(data.password);
        data.password = newPassword.newHash;
        data.salt = newPassword.salt;

        console.log("registro dados", data);
        await repository.create(data, User);
    }
    catch(e){
        throw new WorldCupError(e.message, e.status);
    }
};

exports.authenticate =  async (data,req) => {

    try {
        const User         = await getUserModel();
        const existingUser = await repository.getByEmail(data.email, User);
        if(!existingUser){
            throw new WorldCupError(`Usuario ${data.email} não cadastrado!`, 409);
        }

        const descrypt = descrypPassword(existingUser, data.password) ;
        const ret = descrypt.newHash === existingUser.password;
        if(!ret){
          throw new WorldCupError("Usuário ou senha inválidos",404);
        }

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

exports.refreshToken = async(token) => {
    try {

        const User         = await getUserModel();
        const data         = await decodeToken(token);
        const user         = await repository.getById(data.id, User);

        if (!user) {
            throw new WorldCupError("Token não encontrado!", 404);
        }

        return await generateToken({
            id:    user._id,
            email: user.email,
            name:  user.name,
            roles: user.roles
        });
    } catch (e) {
        throw new WorldCupError(e.message, e.status);
    }
};

exports.authorize = function (req, res, next) {

    const token = req.get('authorization');
    console.log("token", token);
    if (!token) {
        res.json({message: 'Acesso não permitido!', status: 401});
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

