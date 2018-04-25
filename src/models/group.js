'use strict';

import mongoose         from "mongoose";

const Schema     = mongoose.Schema;
const GroupWorldCupSchema = new Schema({
    nome: {
        type:       String,
        maxLength:  200,
        required:   true,
        unique:     true
    },
    classficacao : [classficacao]

});

export {GroupWorldCupSchema as GroupWorldCupSchema};
