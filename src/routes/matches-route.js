'use strict';

import {Router}                           from "express";
import colors                             from "colors";
import controller                         from "../controllers/matches-controller";
import userService                        from "../services/user-service";

const matchesRouter =  Router();

matchesRouter.post('/register', userService.authorize, controller.register);
matchesRouter.get('/getbyId/:id', userService.authorize, controller.getById);
matchesRouter.get('/getall', userService.authorize, controller.getAll);
matchesRouter.delete('/delete/:id', userService.authorize, controller.delete);
matchesRouter.put('/update/:id', userService.authorize, controller.update);

export default matchesRouter;
