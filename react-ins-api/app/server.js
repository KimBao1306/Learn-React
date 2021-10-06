const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const routerAuth = require('./routes/auth.route');
const routerUser = require('./routes/user.route');
const routerHome = require('./routes/home.route');

const middlewareAuth = require('./middlewares/auth.middleware');

const app = express();

mongoose
	.connect('mongodb://localhost:27017/photolibrary', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => console.log('Connected to Mongoose'))
	.catch((err) => console.log(err));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({origin: 'http://localhost:3000'}));

app.use('/api/auth', routerAuth);
app.use('/api/home', routerHome);
app.use('/api/user', middlewareAuth.checkToken, routerUser);

const listener = app.listen(process.env.PORT, () => {
	console.log('Your app is listening on port ' + process.env.PORT);
});
