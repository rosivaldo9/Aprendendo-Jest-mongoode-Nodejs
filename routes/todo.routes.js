const express = require('express');
const UserController = require('../Controller/UserControllerr');
const router = express.Router();

router.post('/todos', UserController.createTodo);

module.exports = router;

