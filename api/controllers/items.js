"use strict";

const apiMeli = require("../services/apiMeli.js");

/*
** Controlador que se encarga de responder a las rutas definidas para la aplicación.
*/

const itemService = {
  /*
  ** Realiza petición de búsqueda de items al servicio apiMeli, procesa el resultado y genera el objeto a retornar.
  */
  search: async (req, res) => {
    const result = {
      author: {
        name: "Maximiliano",
        lastname: "Angeletti"
      },
      categories: [],
      items: []
    };

    /*
    ** Consulta los items a partir del parametro q de la ruta.
    */
    let items = await apiMeli.search(req.query.q);

    /*
    ** Procesa los items obtenidos para insertarlos en el array a retornar.
    */
    const promises = items.map(async element => {
      /*
      ** Consulta la categoría del item.
      */
      let category = await apiMeli.getCategory(element.category_id);

      /*
      ** Consulta la moneda del item.
      */
      let currency = await apiMeli.getCurrency(element.currency_id);

      /*
      ** Genera el objeto item que se insertará en el array items final.
      */
      let item = {
        id: element.id,
        title: element.title,
        price: {
          currency: currency.symbol,
          amount: element.price,
          decimals: currency.decimal_places
        },
        picture: element.thumbnail,
        condition: element.condition,
        free_shipping: !!element.shipping.free_shipping
          ? element.shipping.free_shipping
          : false
      };

      result.items.push(item);
      /*
      ** Inserta la categoría en el array en caso de que no figure.
      */
      if (result.categories.indexOf(category.name) === -1) {
        result.categories.push(category.name);
      }
    });

    /*
    ** Espera a que termine de procesar los items.
    */
    await Promise.all(promises);

    return res.json(result);
  },
  /*
  ** Realiza petición de obtener item por id al servicio apiMeli, procesa el resultado y genera el objeto a retornar.
  */
  get: async (req, res) => {
    const result = {
      author: {
        name: "Maximiliano",
        lastname: "Angeletti"
      },
      item: {}
    };

    /*
    ** Consulta el item a partir del parametro id de la ruta.
    */
    const element = await apiMeli.getItem(req.params.id);

    /*
    ** Verifica que haya recibido un item correcto.
    */
    if (!!element.id) {
      /*
      ** Consulta la moneda del item.
      */
      let currency = await apiMeli.getCurrency(element.currency_id);
      /*
      ** Consulta la descripción del item.
      */
      let description = await apiMeli.getDescription(element.id);

      /*
      ** Genera el objeto item que se insertará en el objeto de retorno final.
      */
      result.item = {
        id: element.id,
        title: element.title,
        price: {
          currency: currency.symbol,
          amount: element.price,
          decimals: currency.decimal_places
        },
        picture: (!!element.pictures && element.pictures[0]) ? element.pictures[0].url : element.thumbnail,
        condition: element.condition,
        free_shipping: !!element.shipping
          ? element.shipping.free_shipping
          : false,
        sold_quantity: element.sold_quantity,
        description: description
      };

      return res.json(result);
    }
    /*
    ** Retorna el código de error.
    */
    return res.status(element.getCode()).json(element.getBody());
  }
};

module.exports = itemService;
