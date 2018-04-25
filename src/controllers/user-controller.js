'use strict';

import {registrationSchema, loginSchema} from "../validators/validationSchemas";
import userService from "../services/user-service";
import WorldCupError from '../exception/exception';

exports.register = async (req, res, next) => {

    try {

        req.checkBody(registrationSchema);
        const errors = req.validationErrors();
        if (errors) {
            throw new WorldCupError(errors, 500);
        }
        const {email, password, name} = req.body;
        const data = {
            name: name,
            email: email,
            password: password,
            roles: ["user"]
        };

        await userService.save(data);
        res.json({message: "Usuario registrado com sucesso!", status: 201});

    } catch (e) {
        res.status(e.status).json({message: e.message, status: e.status});
    }
};

exports.authenticate = async (req, res, next) => {
    try {

        req.checkBody(loginSchema);
        const errors = req.validationErrors();
        if (errors) {
            throw new WorldCupError(errors, 500);
        }

        const {email, password} = req.body;
        const data = {
            email: email,
            password: password
        };

        const user = await userService.authenticate(data, req);
        console.log("user", user);
        res.json({message: "Usuario logado com sucesso!", status: 200, "token": user});

    } catch (e) {
        res.status(e.status).json({message: e.message, status: e.status});
    }
};

exports.refreshToken = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        const data = await userService.refreshToken(token);
        res.status(201).send({token: data});
    } catch (e) {
        res.status(e.status).json({message: e.message, status: e.status});
    }
};
