const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
	name: String,
	email: String,
	usn: String,
	psw: String,
	role: String,
	rf: String,
});

module.exports = User = mongoose.model('user', Schema);
