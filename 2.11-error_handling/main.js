'use strict';

const express = require('express'),
	app = express(),
	layouts = require('express-ejs-layouts'),
	homeController = require('./controllers/homeController'),
	errorController = require('./controllers/errorController');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(layouts);
app.use(
	express.urlencoded({
		extended: false
	})
);
app.use(express.json());

app.use((req, res, next) => {
	console.log(`request made to: ${req.url}`);
	next();
});

app.get("/name/:myName", homeController.respondWithName);
app.get("/about", homeController.renderAbout);

app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get('port'), () => {
	console.log(`Server running at http://localhost:${app.get('port')}`);
});
