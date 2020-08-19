const express = require('express');
const auth = require('./../middleware/auth');
const Contact = require('./../models/Contact');

const router = express.Router();

/*
@Route  GET /api/contacts
@desc   List all contact Items
@access Private
*/
router.get('/', auth, async (req, res) => {
	try {
		const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
		res.status(200).json(contacts);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

/*
@Route  POST /api/contacts
@desc   Add New Contact
@access Private
*/
router.post('/', auth, async (req, res) => {
	const { name, email, phone, type } = req.body;

	if (!name || name === '') return res.status(400).json({ msg: 'Please Enter name of Contact' });
	try {
		const newContact = await Contact.create({ name, email, phone, type, user: req.user.id });
		res.status(201).json(newContact);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

/*
@Route  PUT /api/contacts/:id
@desc   Update Contact
@access Private
*/
router.put('/:id', auth, async (req, res) => {
	const { name, email, phone, type } = req.body;
	let contactField = {};

	if (name) contactField.name = name;
	if (email) contactField.email = email;
	if (phone) contactField.phone = phone;
	if (type) contactField.type = type;

	try {
		let contact = await Contact.findById(req.params.id);
		if (!contact) return res.status(404).json({ msg: 'No Contact Found' });

		if (contact.user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'You do not have permission for this action' });

		contact = await Contact.findByIdAndUpdate(req.params.id, { $set: contactField }, { new: true });
		res.status(201).json(contact);
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

/*
@Route  DELTE /api/contacts/:id
@desc   Delete Contact
@access Private
*/
router.delete('/:id', auth, async (req, res) => {
	try {
		let contact = await Contact.findById(req.params.id);
		if (!contact) return res.status(404).json({ msg: 'No Contact Found' });

		if (contact.user.toString() !== req.user.id)
			return res.status(401).json({ msg: 'You do not have permission for this action' });

		await Contact.findByIdAndRemove(req.params.id);
		res.status(204).json({ msg: 'Contact Deleted' });
	} catch (err) {
		console.log(err.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
