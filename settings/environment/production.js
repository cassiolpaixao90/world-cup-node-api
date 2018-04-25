"use strict";

module.exports = {
    mongo: {
        uri: process.env.MONGOLAB_URI
    },
    secrets: {
        session: process.env.KEY_SECRET_SESSION,
        salt: process.env.KEY_SECRET_SALT
    },
    server:{
        ip: process.env.IP || '',
        port: process.env.PORT || '',
        domain: process.env.DOMAIN || ''
    },
    facebook: {
        clientID: process.env.FACEBOOK_ID,
        clientSecret: process.env.FACEBOOK_SECRET,
        callback: server.domain + '/auth/facebook/callback'
    },
    google: {
        clientID: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        callback: server.domain+'/auth/google/callback'
    }
};
