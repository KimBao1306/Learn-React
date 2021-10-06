const jwt = require('jsonwebtoken');

module.exports.checkToken = async (req, res, next) => {
	const headerAuth = req.get('Authorization');

	if (!headerAuth) {
		res.status(403).json({
			success: false,
			mess: 'Bạn cần đăng nhập trước khi sử dụng chức năng này',
		});
	}

	try {
		const token = headerAuth.split(' ')[1];

		const verifyUser = jwt.verify(token, process.env.PRIVATE_KEY_JWT);

		req.user = verifyUser;

		next();
	} catch (err) {
		res.status(401).json({success: false, mess: 'Token không hợp lệ'});
	}
};

module.exports.checkRefreshToken = async (req, res, next) => {
	const rfToken = req.body.rfToken;

	if (!rfToken) {
		res.status(403).json({
			success: false,
			mess: 'Không tìm thấy refresh token',
		});
	}

	try {
		const verifyUser = jwt.verify(rfToken, process.env.PRIVATE_REFRESH_KEY_JWT);

		req.user = verifyUser;

		next();
	} catch (err) {
		res.status(401).json({success: false, mess: 'Refresh Token không hợp lệ'});
	}
};
