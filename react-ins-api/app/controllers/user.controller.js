const shortId = require('shortid');
const cloudinary = require('cloudinary').v2;
const User = require('../models/user.model');
const Photo = require('../models/photo.model');

const db = require('../db');

module.exports.getInfo = async (req, res) => {
	res.status(200).json(req.user);
};

module.exports.uploadAlbum = async (req, res) => {
	if (req.file) {
		//get path save image
		const {path} = req.file;
		//usn get in jwt
		const user = req.user;

		const cloudinaryResult = await cloudinary.uploader.upload(`./${path}`);

		await Photo.create({
			...req.body, //title - desc
			src: cloudinaryResult.url,
			idUser: user._id,
			liked: 0,
			idLikes: [],
		});

		res.json({success: true, mess: 'Đã upload ảnh thành công'});
	} else {
		res.json({success: false, mess: 'Upload ảnh không thành công'});
	}
};

module.exports.getAlbum = (req, res) => {
	const {id} = res.locals.user;

	const userAlbum = db.get('albums').filter({idUser: id}).value();

	res.json({
		success: true,
		mess: 'Lấy albums thành công',
		userAlbum,
	});
};

module.exports.likeImg = (req, res) => {
	const {idImg} = req.params;
	db.get('albums').find({id: idImg}).set();
	res.json({success: true, mess: 'Đã like ảnh'});
};

module.exports.commentImg = (req, res) => {
	res.json({success: true, mess: 'Đã comment ảnh'});
};
