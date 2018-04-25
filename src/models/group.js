'use strict';

import mongoose         from "mongoose";

const Schema     = mongoose.Schema;
const GroupWorldCupSchema = new Schema({
    nome: {
        type:       String,
        maxLength:  200,
        required:   true
    }
});

export {GroupWorldCupSchema as GroupWorldCupSchema};

