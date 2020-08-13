'use strict'

const express = require('express');
const app = express();
// const dateHelper = require('./app/helpers/date');
const { PORT } = require('./app/config');

app.post('/users', function(req, res, next) {
  console.log('from post users');
  res.json({name: 'test post'})
});

app.listen(PORT, function() {
  console.log(`API on port ${PORT}`);
});

// app.use(function(req, res, next) {
//   console.log('first midd', dateHelper.formattedDate());
//   console.log('test func', dateHelper.test());
//   dateHelper.test()
//   req.nodeJs = true;
//   next();
// });
//
// app.get('/users', function(req, res, next) {
//   console.log('from get users');
//   res.json({name: 'test'})
// });
//

//
// app.use(function(req, res, next) {
//   console.log('second midd', req.nodeJs);
//   next();
// });

