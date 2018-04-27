'use strict';

import {Router}                           from "express";
import colors                             from "colors";
import controller                         from "../controllers/player-controller";
import userService                        from "../services/user-service";

const playerRouter =  Router();

playerRouter.post('/register', userService.authorize, controller.register);
playerRouter.get('/getbyId/:id', userService.authorize, controller.getById);
playerRouter.get('/getall', userService.authorize, controller.getAll);
playerRouter.delete('/delete/:id', userService.authorize, controller.delete);
playerRouter.put('/update/:id', userService.authorize, controller.update);
export default playerRouter;
