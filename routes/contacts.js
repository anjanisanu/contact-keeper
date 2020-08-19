const express = require('express');

const router = express.Router();

/*
@Route  GET /api/contacts
@desc   List all contact Items
@access Private
*/
router.get('/', (req, res) => {
	res.send('Get All Contacts');
});

/*
@Route  POST /api/contacts
@desc   Add New Contact
@access Private
*/
router.post('/', (req, res) => {
	res.send('Add New Contact');
});

/*
@Route  PUT /api/contacts/:id
@desc   Update Contact
@access Private
*/
router.put('/:id', (req, res) => {
	res.send('Update Contact');
});

/*
@Route  DELTE /api/contacts/:id
@desc   Delete Contact
@access Private
*/
router.delete('/:id', (req, res) => {
	res.send('Delete Contact');
});

module.exports = router;
