'use strict';

import {Router}                           from "express";
import colors                             from "colors";
import controller                         from "../controllers/player-controller";
import userService                        from "../services/user-service";

const playerRouter =  Router();

playerRouter.post('/register', userService.authorize, controller.register);

export default playerRouter;
