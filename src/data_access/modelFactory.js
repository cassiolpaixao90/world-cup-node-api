"use strict";

import { UserSchema, LoginSchema }              from "../models/user";
import { CountrySchema }                        from "../models/country";
import { MatchesSchema }                        from "../models/matches";
import { PlayerSchema }                         from "../models/player";
import connectionProvider                       from "./connectionProvider";
import config                                   from "../../settings/environment";

export const getUserModel = async  () => {
    try {
        const conn = await connectionProvider( config.mongo.uri );
        return conn.model("User", UserSchema);
    } catch (err) {
        throw err;
    }
};

export const getCountryModel = async  () => {
    try {
        const conn = await connectionProvider( config.mongo.uri );
        return conn.model("CountrySchema", CountrySchema);
    } catch (err) {
        throw err;
    }
};

export const getPlayerModel = async  () => {
    try {
        const conn = await connectionProvider( config.mongo.uri );
        return conn.model("PlayerSchema", PlayerSchema);
    } catch (err) {
        throw err;
    }
};

export const getMatchesModel = async  () => {
    try {
        const conn = await connectionProvider( config.mongo.uri );
        return conn.model("MatchesSchema", MatchesSchema);
    } catch (err) {
        throw err;
    }
};

export const getLoginModel = async  () => {
    try {
        const conn = await connectionProvider( config.mongo.uri );
        return conn.model("LoginSchema", LoginSchema);
    } catch (err) {
        throw err;
    }
};
