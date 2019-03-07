const express = require('express'),
  app = express(),
  config = require('./utils/config'),
  router = require('./utils/routes'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  corsOptions = require('./services/corsService')

//Cors
app.use(cors(corsOptions))
app.options('*', cors(corsOptions))

//BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(config.api.port, function() {
  console.log(config.api.name + ' app listening on port ' + config.api.port);
});

app.use('/', router);
