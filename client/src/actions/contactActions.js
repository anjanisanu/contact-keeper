import axios from 'axios';
import {
	GET_CONTACTS,
	CONTACT_ERROR,
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT,
	CLEAR_CONTACTS,
	CLEAR_MSG
} from './types';

export const getContacts = () => async (dispatch) => {
	try {
		const res = await axios.get('/api/contacts');
		dispatch({
			type: GET_CONTACTS,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: CONTACT_ERROR,
			payload: err.response.data.msg
		});
	}
};

export const addContact = (formData) => async (disptach) => {
	try {
		const res = await axios.post('/api/contacts', formData, { headers: { 'Content-Type': 'application/json' } });

		disptach({
			type: ADD_CONTACT,
			payload: res.data
		});
	} catch (err) {
		disptach({
			type: CONTACT_ERROR,
			payload: err.response.data.msg
		});
	}
};

export const deleteContact = (id) => async (dispatch) => {
	try {
		await axios.delete(`/api/contacts/${id}`);
		dispatch({
			type: DELETE_CONTACT,
			payload: id
		});
	} catch (err) {
		dispatch({
			type: CONTACT_ERROR,
			payload: err.response.data.msg
		});
	}
};

export const setCurrent = (contact) => (dispatch) => {
	dispatch({
		type: SET_CURRENT,
		payload: contact
	});
};

export const clearCurrent = () => (dispatch) => {
	dispatch({
		type: CLEAR_CURRENT
	});
};

export const updateContact = (formData) => async (dispatch) => {
	try {
		const res = await axios.put(`api/contacts/${formData._id}`, formData, {
			headers: { 'Content-Type': 'application/json' }
		});
		dispatch({
			type: UPDATE_CONTACT,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: CONTACT_ERROR,
			payload: err.response.data.msg
		});
	}
};

export const clearContacts = () => (dispatch) => {
	dispatch({
		type: CLEAR_CONTACTS
	});
};

export const clearMsg = () => (dispatch) => {
	dispatch({
		type: CLEAR_MSG
	});
};
