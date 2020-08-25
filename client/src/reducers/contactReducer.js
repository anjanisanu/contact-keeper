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
} from './../actions/types';

const intialState = {
	contacts: [],
	current: null,
	msg: null,
	status: null
};

export default (state = intialState, action) => {
	switch (action.type) {
		case GET_CONTACTS:
			return {
				...state,
				contacts: action.payload
			};
		case ADD_CONTACT:
			return {
				...state,
				contacts: [ action.payload.data.newContact, ...state.contacts ],
				msg: action.payload.msg,
				status: action.payload.status
			};

		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter((contact) => contact._id !== action.payload),
				current: null
			};

		case SET_CURRENT:
			return {
				...state,
				current: action.payload
			};

		case CLEAR_CURRENT:
			return {
				...state,
				current: null
			};

		case UPDATE_CONTACT:
			return {
				...state,
				contacts: [
					...state.contacts.map(
						(contact) => (contact._id === action.payload.data.contact._id ? action.payload.data.contact : contact)
					)
				],
				msg: action.payload.msg,
				status: action.payload.status
			};

		case CLEAR_MSG:
			return {
				...state,
				msg: null,
				status: null
			};

		case CLEAR_CONTACTS:
			return {
				...state,
				contacts: null,
				status: null,
				msg: null
			};

		case CONTACT_ERROR:
			return {
				...state,
				error: action.payload
			};

		default:
			return state;
	}
};
