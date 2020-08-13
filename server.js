'use strict'

const express = require('express');
const app = express();

const { PORT } = require('./app/config');

require('./app/config/express').init(app);
require('./app/config/routes').init(app);
require('./app/config/mongoose').init(app);


app.listen(PORT, function() {
  console.log(`API on port ${PORT}`);
});


