'use strict'


module.exports = {
  getUsers,
  createUsers,
  midd2,
  midd3
};


function getUsers(req, res, next) {
  console.log('get users from first midd');
  next()
}

function createUsers(req, res, next) {
  console.log('create user', req.body);
  console.log('resources', req.resources);
  res.send('user created')
}

function midd2(req, res, next) {
  console.log('midd 2');
  next()

}

function midd3(req, res, next) {
  console.log('midd 3');
  res.send('Midd 3')
}
