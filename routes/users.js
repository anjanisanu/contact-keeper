const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('./../models/User');

const router = express.Router();

/*
@Route  POST /api/users
@desc   Register a user
@access Public
*/
router.post('/', async (req, res) => {
	const { name, email, password } = req.body;
	try {
		if (!name || !email || !password || name === '' || email === '' || password === '')
			return res.status(400).json({ msg: 'All Fields are mandatory' });

		if (password.length < 6) return res.status(400).json({ msg: 'Password must be 6 or more characters' });

		let user = await User.findOne({ email });
		if (user) return res.status(400).json({ msg: 'User Already Exists' });

		user = new User({ name, email, password });
		const salt = await bcrypt.genSalt(10);
		user.password = await bcrypt.hash(password, salt);
		await user.save();

		const payload = { user: { id: user.id } };
		jwt.sign(payload, process.env.jwtSecret, { expiresIn: '90d' }, (err, token) => {
			if (err) throw err;

			res.status(201).json({ token });
		});
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
