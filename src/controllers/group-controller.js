'use strict';

import {groupSchema} from "../validators/validationSchemas";
import groupService from "../services/group-service";
import WorldCupError from '../exception/exception';

exports.register = async (req, res, next) => {

    try {

        req.checkBody(groupSchema);
        const errors = req.validationErrors();
        if (errors) {
            throw new WorldCupError(errors, 500);
        }
        console.log("chegou aqui")
        const {nome} = req.body;
        const data = {
            nome: nome
        };

        await groupService.save(data);
        res.json({message: "Grupo registrado com sucesso!", status: 201});

    } catch (e) {
        res.status(e.status).json({message: e.message, status: e.status});
    }
};
