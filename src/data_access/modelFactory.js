"use strict";

import { UserSchema }                           from "../models/user";
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
