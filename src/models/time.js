'use strict';

import mongoose         from "mongoose";

const Schema     = mongoose.Schema;
const TimesWorldCupSchema = new Schema({
    nome: {
        type:       String,
        maxLength:  200,
        required:   true,
        unique:     true
    },
    image:{
        type:       String,
        required:   false
    },
    pontuacao: {
        type : Number,
		required : false
    }

});

export {TimesWorldCupSchema as TimesWorldCupSchema};
