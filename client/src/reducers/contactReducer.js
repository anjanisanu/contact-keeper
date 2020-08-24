import {
	GET_CONTACTS,
	CONTACT_ERROR,
	ADD_CONTACT,
	DELETE_CONTACT,
	SET_CURRENT,
	CLEAR_CURRENT,
	UPDATE_CONTACT
} from './../actions/types';

const intialState = {
	contacts: [],
	current: null
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
				contacts: [ action.payload, ...state.contacts ]
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
					...state.contacts.map((contact) => (contact._id === action.payload._id ? action.payload : contact))
				]
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
