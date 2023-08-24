const express = require('express');
const router = express.Router();

const controller = require('../controllers/user.Controller');

router.get('/', controller.getUser);
router.get('/detail', controller.getUserDetail);
router.post('/', controller.createUser);

module.exports = router;