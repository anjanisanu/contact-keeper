const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = (req, res, next) => {
	//GET TOKEN FROM HEADER
	const token = req.header('x-auth-token');

	if (!token) return res.status(401).json({ msg: 'No token found. Authorization Denied' });

	//Verify Token
	try {
		const decoded = jwt.verify(token, config.get('jwtSecret'));
		req.user = decoded.user;
		next();
	} catch (err) {
		console.log(err.message);
		req.status(401).json({ msg: 'Invalid Token' });
	}
};
