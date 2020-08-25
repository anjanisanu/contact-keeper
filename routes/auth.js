const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const auth = require('./../middleware/auth');
const User = require('./../models/User');

const router = express.Router();

/*
@Route  GET /api/auth
@desc   Get login user details
@access Private
*/
router.get('/', auth, async (req, res) => {
	try {
		const user = await User.findById(req.user.id).select('name email -_id');
		res.status(200).json(user);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

/*
@Route  POST /api/auth
@desc   Login User
@access Public
*/
router.post('/', async (req, res) => {
	const { email, password } = req.body;

	try {
		if (!email || !password || email === '' || password === '')
			return res.status(400).json({ msg: 'Please enter email id and password' });
		const user = await User.findOne({ email });
		if (!user) return res.status(400).json({ msg: 'Invalid Credentials' });

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) return res.status(400).json({ msg: 'Invalid Credentials' });

		const payload = { user: { id: user.id } };
		jwt.sign(payload, process.env.jwtSecret, { expiresIn: '90d' }, (err, token) => {
			if (err) throw err;

			res.status(201).json({
				msg: 'Login Successful',
				token
			});
		});
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
