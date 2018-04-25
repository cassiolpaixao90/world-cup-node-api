'use strict';

import mongoose             from "mongoose";
import TimesWorldCupSchema  from "./time"
const Schema     = mongoose.Schema;

const PartidaWorldCupSchema = new Schema({
    time:{TimesWorldCupSchema}
});

export {PartidaWorldCupSchema as PartidaWorldCupSchema};
