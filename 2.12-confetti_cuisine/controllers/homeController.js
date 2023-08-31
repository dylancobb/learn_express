exports.showIndex = (req, res) => {
	res.render('index');
}

exports.showCourses = (req, res) => {
	res.render('courses');
}

exports.showSignUp = (req, res) => {
	res.render('signup');
}

exports.postSignUpForm = (req, res) => {
	res.render('thanks');
}
