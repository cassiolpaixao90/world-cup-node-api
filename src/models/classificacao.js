'use strict';

import mongoose             from "mongoose";
import TimesWorldCupSchema  from "./time"
const Schema     = mongoose.Schema;

const ClassificacaoWorldCupSchema = new Schema({
    time : [ TimesWorldCupSchema ]
});

export {ClassificacaoWorldCupSchema as ClassificacaoWorldCupSchema};
