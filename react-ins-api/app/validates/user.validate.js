const db = require('../db');

module.exports.checkComment = (req, res, next) => {
	const cmt = req.body.cmt;

	if (!cmt) {
		res.json({
			success: false,
			mess: 'Comment không được để trống',
		});
		return;
	}

	next();
};
