'use strict';

exports.respondWithName = (req, res) => {
	let paramName = req.params.myName;
	res.render('index', { name: paramName });
};

exports.renderAbout = (req, res) => {
	res.render('about');
}