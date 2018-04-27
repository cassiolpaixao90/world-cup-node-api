'use strict';

import {Router}                           from "express";
import colors                             from "colors";
import controller                         from "../controllers/matches-controller";
import userService                        from "../services/user-service";

const matchesRouter =  Router();

matchesRouter.post('/register', userService.authorize, controller.register);

export default matchesRouter;
