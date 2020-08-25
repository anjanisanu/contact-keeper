import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { login, loadUser, clearErrors } from './../../actions/authActions';
import { setAlert } from './../../actions/alertActions';

const Login = (props) => {
	const { token, loadUser, login, setAlert, clearErrors, msg, error } = props;

	useEffect(
		() => {
			if (token) {
				loadUser();
				props.history.push('/');
			}

			if (error) {
				setAlert(error, 'danger');
				clearErrors();
			}

			if (msg) {
				setAlert(msg, 'success');
				clearErrors();
			}
		},
		//eslint-disable-next-line
		[ error, token, msg, props.history ]
	);

	const [ user, SetUser ] = useState({
		email: '',
		password: ''
	});

	const { email, password } = user;

	const onChange = (e) => {
		SetUser({ ...user, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		login(user);

		// SetUser({
		// 	email: '',
		// 	password: ''
		// });
	};

	return (
		<section className='form__login'>
			<h1 className='heading-1'>Login Account</h1>

			<form className='form__contact' onSubmit={onSubmit}>
				<div className='form__contact--field'>
					<svg className='form__contact--field--icon'>
						<use xlinkHref='img/sprite.svg#icon-mail' />
					</svg>
					<input
						type='email'
						name='email'
						value={email}
						placeholder='email'
						className='form__contact--field--input'
						onChange={onChange}
					/>
				</div>

				<div className='form__contact--field'>
					<svg className='form__contact--field--icon'>
						<use xlinkHref='img/sprite.svg#icon-key' />
					</svg>
					<input
						type='password'
						name='password'
						value={password}
						placeholder='Password'
						className='form__contact--field--input'
						required
						onChange={onChange}
					/>
				</div>

				<button className='form__contact--submit' type='submit'>
					Login
					<svg className='form__contact--submit--icon'>
						<use xlinkHref='img/sprite.svg#icon-circle-with-plus' />
					</svg>
				</button>
			</form>
		</section>
	);
};

const mapStateToProps = (state) => ({
	msg: state.auth.msg,
	error: state.auth.error,
	token: state.auth.token
});

export default connect(mapStateToProps, { login, setAlert, loadUser, clearErrors })(Login);
