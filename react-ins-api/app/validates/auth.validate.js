const db = require('../db');

module.exports.checkRegister = (req, res, next) => {
	const name = req.body.name;
	const email = req.body.email;
	const psw = req.body.psw;

	if (!name || name.length > 30) {
		res.json({
			success: false,
			mess: 'Tên không được để trống hoặc dài hơn 30 ký tự',
		});
		return;
	}

	if (!email) {
		res.json({
			success: false,
			mess: 'Email không được để trống hoặc sai định dạng',
		});
		return;
	}

	if (!psw || psw.length < 8) {
		res.json({
			success: false,
			mess: 'Mật khẩu không được để trống hoặc dưới 8 ký tự',
		});
		return;
	}

	const user = db.get('users').find({email}).value();

	if (user) {
		res.json({success: false, mess: 'Email đã có người sử dụng'});
		return;
	}

	next();
};

module.exports.checkLogin = (req, res, next) => {
	const usn = req.body.usn;
	const psw = req.body.psw;

	if (!usn) {
		res.json({
			success: false,
			mess: 'Username không được để trống hoặc sai định dạng',
		});
		return;
	}

	if (!psw || psw.length < 8) {
		res.json({
			success: false,
			mess: 'Mật khẩu không được để trống hoặc dưới 8 ký tự',
		});
		return;
	}

	next();
};

module.exports.checkResetPass = (req, res, next) => {
	const email = req.body.email;

	if (!email) {
		res.json({
			success: false,
			mess: 'Email không được để trống hoặc sai định dạng',
		});
		return;
	}

	next();
};
