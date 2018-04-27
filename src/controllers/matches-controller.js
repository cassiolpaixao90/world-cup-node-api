'use strict';

import {groupSchema}  from "../validators/validationSchemas";
import matchesService from "../services/matches-service";
import WorldCupError  from '../exception/exception';

exports.register = async (req, res, next) => {

    try {

        req.checkBody(groupSchema);
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
