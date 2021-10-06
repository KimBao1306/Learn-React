const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
	src: String,
	title: String,
	desc: String,
	idUser: String,
	liked: Number,
	idLikes: Array,
});

module.exports = Photo = mongoose.model('Photo', Schema);
