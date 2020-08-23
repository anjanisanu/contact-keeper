import axios from 'axios';
import setAuthToken from './../utils/setAuthToken';
import {
	REGISTER_SUCCESS,
	REGISTER_FAIL,
	LOGIN_FAIL,
	LOGIN_SUCCESS,
	USER_LOADED,
	AUTH_ERROR,
	CLEAR_ERRORS,
	LOGOUT
} from './types';

export const register = (formData) => async (dispatch) => {
	try {
		const res = await axios.post('/api/users', formData, {
			headers: {
				'Content-Type': 'application/json'
			}
		});

		loadUser();

		dispatch({
			type: REGISTER_SUCCESS,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: REGISTER_FAIL,
			payload: err.response.data.msg
		});
	}
};

export const login = (formData) => async (dispatch) => {
	try {
		const res = await axios.post('/api/auth', formData, {
			headers: {
				'Content-Type': 'application/json'
			}
		});

		loadUser();

		dispatch({
			type: LOGIN_SUCCESS,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: LOGIN_FAIL,
			payload: err.response.data.msg
		});
	}
};

export const loadUser = () => async (dispatch) => {
	if (localStorage.token) setAuthToken(localStorage.token);

	try {
		const res = await axios.get('/api/auth');
		dispatch({
			type: USER_LOADED,
			payload: res.data
		});
	} catch (err) {
		dispatch({
			type: AUTH_ERROR
		});
	}
};

export const clearErrors = () => (dispatch) => {
	dispatch({
		type: CLEAR_ERRORS
	});
};

export const logout = () => (dispatch) => {
	dispatch({
		type: LOGOUT
	});
};
