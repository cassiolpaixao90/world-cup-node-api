'use strict';

import {Router}                           from "express";
import colors                             from "colors";
import controller                         from "../controllers/group-controller";
import userService                        from "../services/user-service";

const groupRouter =  Router();

groupRouter.post('/register', userService.authorize, controller.register);

export default groupRouter;
