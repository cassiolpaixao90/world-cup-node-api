'use strict';
import mongoose                       from "mongoose";

const Schema     = mongoose.Schema;
const CountrySchema = new Schema({
    nome: {
        type:       String,
        maxLength:  200,
        required:   true,
        unique:     true
    },
    players: [
        {
            name: {
                type:       String,
                maxLength:  200,
                required:   false
            }, 
            position:{
                type:       String,
                maxLength:  200,
                required:   false
            }, 
            number: { 
                type:       String,
                maxLength:  200,
                required:   false
            }
        }
    ]

});

export {CountrySchema as CountrySchema};
