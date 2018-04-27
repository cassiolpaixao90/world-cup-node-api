'use strict';

import {countrySchema}  from "../validators/validationSchemas";
import matchesService from "../services/matches-service";
import WorldCupError  from '../exception/exception';

exports.register = async (req, res, next) => {

    try {

        req.checkBody(countrySchema);
        const errors = req.validationErrors();
        if (errors) {
            throw new WorldCupError(errors, 500);
        }

        const data = req.body;
        await matchesService.save(data);
        res.json({message: "Matches registrado com sucesso!", status: 201});

    } catch (e) {
        res.status(e.status).json({message: e.message, status: e.status});
    }
};

exports.getById = async (req, res, next) => {

    try {

        const id = req.params.id;
        const ret  = await matchesService.getById(id);
        res.json({countries: ret, status: 200});

    } catch (e) {
        res.status(e.status).json({message: e.message, status: e.status});
    }
};

exports.getAll = async (req, res, next) => {

    try {
        const ret  = await matchesService.getAll();
        res.json({countries: ret, status: 200});

    } catch (e) {
        res.status(e.status).json({message: e.message, status: e.status});
    }
};

exports.delete = async (req, res, next) => {

    try {
        const id = req.params.id;
        await matchesService.delete(id);
        res.json({message: "Country deletado com sucesso!", status: 200});

    } catch (e) {
        res.status(e.status).json({message: e.message, status: e.status});
    }
};

exports.update = async (req, res, next) => {

    try {
        const id    = req.params.id;
        const data  = req.body;
        await matchesService.update(id, data);
        res.json({message: "Country atualizado com sucesso!", status: 200});

    } catch (e) {
        res.status(e.status).json({message: e.message, status: e.status});
    }
};
