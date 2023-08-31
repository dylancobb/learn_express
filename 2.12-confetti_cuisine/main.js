const express = require('express'),
	app = express(),
	layouts = require('express-ejs-layouts');
	homeController = require('./controllers/homeController'),
	errorController = require('./controllers/errorController');

app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.use(layouts);
app.use(
	express.urlencoded({
		extended: false
	})
);
app.use(express.json());
app.use(express.static('public'));

app.get('/', homeController.showIndex);
app.get('/courses', homeController.showCourses);
app.get('/contact', homeController.showContact);
app.post('/contact', homeController.postSignUpForm);

app.listen(app.get('port'), () => {
	console.log(`Server running at http://localhost:${ app.get('port') }`);
});
