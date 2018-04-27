'use strict';

import {Router}                           from "express";
import colors                             from "colors";
import controller                         from "../controllers/country-controller";
import userService                        from "../services/user-service";

const countryRouter =  Router();

countryRouter.post('/register', userService.authorize, controller.register);
countryRouter.get('/getbyId/:id', userService.authorize, controller.getById);
countryRouter.get('/getall', userService.authorize, controller.getAll);
countryRouter.delete('/delete/:id', userService.authorize, controller.delete);
countryRouter.put('/update/:id', userService.authorize, controller.update);

export default countryRouter;
