"use strict";

import { UserSchema }                           from "../models/user";
import { GroupWorldCupSchema }                  from "../models/group";
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

export const getGroupWorldCup = async  () => {
    try {
        const conn = await connectionProvider( config.mongo.uri );
        return conn.model("GroupWorldCup", GroupWorldCupSchema);
    } catch (err) {
        throw err;
    }
};
