const express = require('express');
const multer = require('multer');

const validateUser = require('../validates/user.validate');

const controller = require('../controllers/user.controller');

const upload = multer({dest: './public/uploads/albums'});

const router = express.Router();

router.get('/info', controller.getInfo);

router.get('/album', controller.getAlbum);

router.post('/upload', upload.single('img'), controller.uploadAlbum);

router.get('/like/:idImg', controller.likeImg);

router.get('/comment/:idImg', validateUser.checkComment, controller.commentImg);

module.exports = router;
