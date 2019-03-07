const dotenv = require("dotenv").config();

/*
** Se definen los atributos de configuración inicializados en el archivo .env
*/

module.exports = {
  apiMeli: process.env.API_MELI,
  api: {
    name: process.env.APP_NAME,
    port: process.env.PORT
  },
  whitelistedDomains: process.env.WHITELISTED_DOMAINS.split(",")
};
