import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT } from './types';

export const addContact = (formData) => (disptach) => {
	disptach({
		type: ADD_CONTACT,
		payload: formData
	});
};

export const deleteContact = (id) => (dispatch) => {
	dispatch({
		type: DELETE_CONTACT,
		payload: id
	});
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

export const updateContact = (formData) => (dispatch) => {
	dispatch({
		type: UPDATE_CONTACT,
		payload: formData
	});
};
