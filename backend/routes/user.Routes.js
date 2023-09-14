const express = require('express');
const router = express.Router();
const { authenToken } = require('../middlewares/authentication');
const controller = require('../controllers/user.Controller');

router.get('/', authenToken, controller.getUser);
router.get('/detail', authenToken, controller.getUserDetail);
router.post('/', controller.createUser);

module.exports = router;