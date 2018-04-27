'use strict';

import {groupSchema} from "../validators/validationSchemas";
import playerService from "../services/player-service";
import WorldCupError from '../exception/exception';

exports.register = async (req, res, next) => {

    try {

        req.checkBody(groupSchema);
        const errors = req.validationErrors();
        if (errors) {
            throw new WorldCupError(errors, 500);
        }
        
        const data = req.body;
        await playerService.save(data);
        res.json({message: "Player registrado com sucesso!", status: 201});

    } catch (e) {
        res.status(e.status).json({message: e.message, status: e.status});
    }
};
