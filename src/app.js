"use strict";
/* eslint-disable no-console */

import express, { Router } from "express";
import bodyParser from "body-parser";
import expressValidator from "express-validator";
import apiRouteConfig from "./configuration/apiRouterConfig";
import mongoose from "mongoose";
import morgan from "morgan";
import logger from "./logger/logger";


const app = express();
const http = require("http").Server(app);
// Connecta ao banco
// mongoose.connect("mongodb://iot-sensor:iot2018@ds135747.mlab.com:35747/iot-sensor");
// require('./models/user');


// require('./data_access/connectionProvider')('mongodb://iot-sensor:iot2018@ds135747.mlab.com:35747/iot-sensor');
app.use(morgan("common", {
  stream: {
    write: function (mensagem) {
      logger.info(mensagem);
    }
  }
}));

app.use(bodyParser.json({
  limit: '5mb'
}));

app.use(bodyParser.urlencoded({
  extended: false
}));


//configuracao para validacao dos campos
app.use(expressValidator());

//configuracao de rotas
apiRouteConfig(app);

// Habilita o CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://192.168.0.102:3000');
  res.header('Access-Control-Allow-Credentials', 'true')
  res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  next();
});


export default http;
