import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { register, loadUser, clearErrors } from './../../actions/authActions';
import { setAlert } from './../../actions/alertActions';

const Register = (props) => {
	const { register, setAlert, loadUser, clearErrors, msg, error, isAuthenticated } = props;

	useEffect(
		() => {
			if (error) {
				setAlert(error, 'danger');
				clearErrors();
			}
			if (msg) {
				setAlert(msg, 'success');
				clearErrors();
			}
			if (isAuthenticated) {
				loadUser();
				props.history.push('/');
			}
		},
		//eslint-disable-next-line
		[ error, isAuthenticated, props.history ]
	);

	const [ user, SetUser ] = useState({
		name: '',
		email: '',
		password: '',
		passwordConfirm: ''
	});

	const { name, email, password, passwordConfirm } = user;

	const onChange = (e) => {
		SetUser({ ...user, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (password !== passwordConfirm) setAlert('Passwords do not match', 'danger');
		else {
			register(user);

			SetUser({
				name: '',
				email: '',
				password: '',
				passwordConfirm: ''
			});
		}
	};

	return (
		<section className='form__register'>
			<h1 className='heading-1'>Register New Account</h1>

			<form className='form__contact' onSubmit={onSubmit}>
				<div className='form__contact--field'>
					<svg className='form__contact--field--icon'>
						<use xlinkHref='img/sprite.svg#icon-user' />
					</svg>
					<input
						type='text'
						name='name'
						value={name}
						placeholder='name'
						className='form__contact--field--input'
						required
						onChange={onChange}
					/>
				</div>

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

				<div className='form__contact--field'>
					<svg className='form__contact--field--icon'>
						<use xlinkHref='img/sprite.svg#icon-key' />
					</svg>
					<input
						type='password'
						name='passwordConfirm'
						value={passwordConfirm}
						placeholder='Confirm Password'
						className='form__contact--field--input'
						required
						onChange={onChange}
					/>
				</div>

				<button className='form__contact--submit' type='submit'>
					Register
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
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { register, setAlert, loadUser, clearErrors })(Register);
