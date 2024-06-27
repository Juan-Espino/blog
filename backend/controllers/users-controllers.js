//controller for logging in users
const login = async (req, res, next) => {
	const { email, password } = req.body;

	let identifiedUser;

	// find user in database by email
	//encrypt password and compare to database
	//create token

	res.json({ email, password });
};

exports.login = login;
