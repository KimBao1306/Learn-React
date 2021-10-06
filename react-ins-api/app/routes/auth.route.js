const express = require('express');

const validateAuth = require('../validates/auth.validate');

const controller = require('../controllers/auth.controller');
const middleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/login', validateAuth.checkLogin, controller.login);

router.post('/logout', middleware.checkToken, controller.logout);

router.post('/refresh', middleware.checkRefreshToken, controller.refresh);

router.post('/register', validateAuth.checkRegister, controller.register);

router.post('/reset', validateAuth.checkResetPass, controller.resetPass);

module.exports = router;
