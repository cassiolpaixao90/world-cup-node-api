'use strict';

import mongoose   from "mongoose";
const Schema     = mongoose.Schema;

const MatchesSchema = new Schema({
    stadium: {
        type:       String,
        maxLength:  200,
        required:   true
    },
    playerOne: {
        type:       String,
        maxLength:  200,
        required:   true
    },
    playerTwo: {
        type:       String,
        maxLength:  200,
        required:   true
    },
    group:{
        type:       String,
        maxLength:  200,
        required:   true
    },
    date: {
        type:       String,
        maxLength:  200,
        required:   true
    }


});

export {MatchesSchema as MatchesSchema};
