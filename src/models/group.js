'use strict';

import mongoose              from "mongoose";
import PartidaWorldCupSchema from "./partida";

const Schema     = mongoose.Schema;
const GroupWorldCupSchema = new Schema({
    nome: {
        type:       String,
        maxLength:  200,
        required:   true,
        unique:     true
    },
    classficacao : [PartidaWorldCupSchema]

});

export {GroupWorldCupSchema as GroupWorldCupSchema};
