"use strict";

const config = require("../utils/config.js"),
  requestify = require("requestify");

/*
** Servicio que se encarga de hacer las peticiones a la API de Mercado Libre,
** para obtener los datos necesarios en la conformación de los items a responder.
*/

const apiMeli = {
  /*
  ** Obtiene la categoría en base al category_id
  */
  getCategory: category_id => {
    return requestify
      .get(config.apiMeli + "categories/" + category_id)
      .then(resp => {
        return resp.getBody();
      })
      .fail(function(error) {
        return {};
      });
  },
  /*
  ** Obtiene la descripción en base al id del item
  */
  getDescription: id => {
    return requestify
      .get(config.apiMeli + "items/" + id + "/description")
      .then(resp => {
        return resp.getBody().plain_text;
      })
      .fail(function(error) {
        return "";
      });
  },
  /*
  ** Obtiene la moneda en base al currency_id
  */
  getCurrency: currency_id => {
    return requestify
      .get(config.apiMeli + "currencies/" + currency_id)
      .then(resp => {
        return resp.getBody();
      })
      .fail(function(error) {
        return {};
      });
  },
  /*
  ** Obtiene el item en base al id
  */
  getItem: id => {
    return requestify
      .get(config.apiMeli + "items/" + id)
      .then(async resp => {
        return resp.getBody();
      })
      .fail(function(error) {
        return error;
      });
  },
  /*
  ** Obtiene los items (4) en base al query (q) recibido por parametro en la ruta.
  */
  search: query => {
    return requestify
      .get(config.apiMeli + "sites/MLA/search?q=" + query + "&limit=4")
      .then(resp => {
        return resp.getBody().results;
      })
      .fail(function(error) {
        return [];
      });
  }
};

module.exports = apiMeli;
