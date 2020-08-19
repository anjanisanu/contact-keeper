const express = require('express');

const router = express.Router();

/*
@Route  GET /api/auth
@desc   Get login user details
@access Private
*/
router.get('/', (req, res) => {
	res.send('Get login details');
});

/*
@Route  POST /api/auth
@desc   Login User
@access Public
*/
router.get('/', (req, res) => {
	res.send('Login User');
});

module.exports = router;
