'use strict'

const mongoose = require('mongoose');
const { uri } = require('./index');

module.exports = {
  init: initMongoose,
};

function initMongoose() {
  mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  process.on('SIGNINT', cleanup)
}

function cleanup() {
  mongoose.connection.close(function() {
    process.exit()
  })
}
