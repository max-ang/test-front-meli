"use strict";

const config = require("../utils/config");
let { whitelistedDomains } = config;

/*
** Servicio que define los dominios a los cuales se les da acceso a la API.
** Dichos dominios provienen del archivo .env
*/

module.exports = {
  origin: function(origin, callback) {
    if (whitelistedDomains.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  }
};
