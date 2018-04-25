"use strict";

module.exports = {

    mongo: {
        uri: "mongodb://localhost:27017/world-cup-api"
    },
    secrets: {
        session: 'world-cup-api',
        salt: 'f7148498-4044-4c7b-ac11-6adf3cec68ce'
    },
    server: {
        ip: 'localhost',
        port: 3000
    },
    facebook: {
        clientID: 'app-id',
        clientSecret: 'secret',
        callback:'http://localhost:3000/auth/facebook/callback'
    },
    google: {
        clientID: 'app-id',
        clientSecret: 'app-id',
        callback: 'http://localhost:3000/auth/google/callback'
    }
};

