'use strict';

import mongoose   from "mongoose";
const Schema     = mongoose.Schema;

const PlayerSchema = new Schema({
    name: {
        type:       String,
        maxLength:  200,
        required:   true
    },
    number: {
        type:       Number,
        maxLength:  200,
        required:   false
    },
    position: {
        type:       String,
        maxLength:  200,
        required:   false
    }

});

export {PlayerSchema as PlayerSchema};
