'use strict'

const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/usersCtrl');

router.get('/users', userCtrl.getUsers, userCtrl.midd2, userCtrl.midd3);

router.post('/users',userCtrl.createUsers);

module.exports = router;
