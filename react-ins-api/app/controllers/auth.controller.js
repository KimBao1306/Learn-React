const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const shortId = require('shortid');
const mailgun = require('mailgun-js')({
	apiKey: process.env.MAILGUN_API_KEY,
	domain: process.env.MAILGUN_DOMAIN,
});

const User = require('../models/user.model');

// change to MongooDB
const db = require('../db');

function removeProp(obj, key) {
	//check property in obj
	// if (!obj.hasOwnProperty(key)) return obj;
	//clone new obj
	const newObj = {
		...obj,
	};

	delete newObj[key];

	return newObj;
}

module.exports.login = async (req, res) => {
	const {usn, psw} = req.body;

	const user = await User.findOne({
		username: usn,
	});

	if (!user) {
		res.json({success: false, mess: 'Tài khoản không tồn tại'});
		return;
	}

	const checkPass = await bcrypt.compare(psw, user.psw);

	if (!checkPass) {
		res.json({
			success: false,
			mess: 'Tài khoản hoặc mật khẩu không đúng',
		});
		return;
	}

	const newUser = removeProp(user.toObject(), 'psw');

	const accessToken = jwt.sign(
		{
			newUser,
		},
		process.env.PRIVATE_KEY_JWT,
		{
			expiresIn: '20m',
		}
	);

	const refreshToken = jwt.sign(
		{
			newUser,
		},
		process.env.PRIVATE_REFRESH_KEY_JWT,
		{
			expiresIn: '7d',
		}
	);

	await User.findByIdAndUpdate(newUser._id, {
		rf: refreshToken,
	});

	res.json({
		success: true,
		mess: 'Đăng nhập thành công',
		accessToken,
		refreshToken,
	});
};

module.exports.refresh = async (req, res) => {
	const newUser = req.user.newUser;

	const newAccessToken = jwt.sign(
		{
			newUser,
		},
		process.env.PRIVATE_KEY_JWT,
		{
			expiresIn: '20m',
		}
	);
	res.json({success: true, mess: 'Refresh token thành công', newAccessToken});
};

module.exports.logout = async (req, res) => {
	//tìm user và xóa rf token nếu như user logout
	const {_id: id} = req.user.newUser;

	await User.findByIdAndUpdate(id, {$unset: {rf: 1}});

	res.json({
		success: true,
		mess: 'Đăng xuất thành công',
	});
};

module.exports.register = (req, res) => {
	req.body.id = shortId.generate(8);
	req.body.psw = bcrypt.hashSync(req.body.psw, 10);

	db.get('users').push(req.body).write();

	res.json({success: 'true', mess: 'Khởi tạo thành công'});
};

module.exports.resetPass = (req, res) => {
	const {email} = req.body;

	const user = db.get('users').find({email}).value();

	if (!user) {
		res.json({success: false, mess: 'Tài khoản không tồn tại'});
		return;
	}

	const data = {
		from: 'kimbao756g@gmail.com',
		to: 'baolkps08687@fpt.edu.vn',
		subject: 'Hello',
		text: 'Testing some Mailgun awesomness!',
	};

	mailgun.messages().send(data, function (error, body) {
		if (error) {
			return res.json({
				success: false,
				mess: 'Gửi mail không thành công',
			});
		}
		res.json({
			success: true,
			mess: 'Hãy kiểm tra email của bạn',
		});
	});
};
