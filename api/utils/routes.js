"use strict";

const express = require("express"),
  router = express.Router(),
  items = require("../controllers/items.js");

/*
** Se definen las rutas para la API y el método que responderá a dicha ruta.
*/

const apiName = "/api";

router.get(apiName + "/items", items.search);
router.get(apiName + "/items/:id", items.get);

module.exports = router;
