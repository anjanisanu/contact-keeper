import { ADD_CONTACT, DELETE_CONTACT, SET_CURRENT, CLEAR_CURRENT, UPDATE_CONTACT } from './../actions/types';

const intialState = {
	contacts: [
		{
			id: 1,
			name: 'Anjani Sanu',
			email: 'sanukarna@gmail.com',
			phone: '111-222-333',
			type: 'personal'
		},
		{
			id: 2,
			name: 'Sanu Karn',
			email: 'sanukarna@gmail.com',
			phone: '111-222-333',
			type: 'personal'
		}
	],
	current: null
};

export default (state = intialState, action) => {
	switch (action.type) {
		case ADD_CONTACT:
			return {
				...state,
				contacts: [ ...state.contacts, action.payload ]
			};

		case DELETE_CONTACT:
			return {
				...state,
				contacts: state.contacts.filter((contact) => contact.id !== action.payload),
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
				contacts: [ ...state.contacts.map((contact) => (contact.id === action.payload.id ? action.payload : contact)) ]
			};

		default:
			return state;
	}
};
