'use strict'

import _ from 'lodash';

process.env.NODE_ENV =  process.env.NODE_ENV || 'development';
const setting = require('./' + process.env.NODE_ENV + '.js' || {})

const all = {

    env: process.env.NODE_ENV,
    server: {
        ip: setting.server.ip,
        port: setting.server.port
    },

    secrets: {
        session: setting.secrets.session,
        salt: setting.secrets.salt
    },
    mongo: {
        uri: setting.mongo.uri
    },

    facebook: {
        clientID: setting.facebook.clientID,
        clientSecret: setting.facebook.clientSecret,
        callback: setting.facebook.callback
    },
    google: {
        clientID: setting.google.clientID,
        clientSecret: setting.google.clientSecret,
        callback: setting.google.callback
    }
};

module.exports = _.assign(all, require('./' + process.env.NODE_ENV + '.js' || {}));



