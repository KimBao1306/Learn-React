const Photo = require('../models/photo.model');
const User = require('../models/user.model');

module.exports.index = async (req, res) => {
	const photoList = Photo.find();
	const userList = User.find();

	const data = {
		photoList: await photoList,
		userList: await userList,
	};
	res.json({success: true, mess: 'Thành công', data});
};
