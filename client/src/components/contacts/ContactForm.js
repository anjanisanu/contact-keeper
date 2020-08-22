import React, { useState, useEffect } from 'react';
import uuid from 'react-uuid';
import { connect } from 'react-redux';

import { addContact, updateContact, clearCurrent } from './../../actions/contactActions';

const ContactForm = ({ addContact, current, updateContact, clearCurrent }) => {
	useEffect(
		() => {
			if (current) setUser(current);
		},
		[ current ]
	);

	const [ user, setUser ] = useState({
		name: '',
		email: '',
		phone: '',
		type: 'personal',
		id: uuid()
	});

	const { name, email, phone, type } = user;

	const onChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		if (current) {
			updateContact(user);
			clearCurrent();
		} else addContact(user);

		setUser({
			name: '',
			email: '',
			phone: '',
			type: 'personal'
		});
	};

	return (
		<section className='form'>
			<h1 className='heading-1'>{current ? 'Update Contact' : 'Add Contact'}</h1>

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
						onChange={onChange}
						required
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
						<use xlinkHref='img/sprite.svg#icon-phone' />
					</svg>
					<input
						type='text'
						name='phone'
						value={phone}
						placeholder='phone'
						className='form__contact--field--input'
						onChange={onChange}
					/>
				</div>

				<div className='form__contact--type'>
					<div className='form__contact--radio'>
						<input
							type='radio'
							name='type'
							value='personal'
							id='Personal'
							className='form__contact--radio-input'
							checked={type === 'personal'}
							onChange={onChange}
						/>
						<label htmlFor='Personal' className='form__contact--radio-label'>
							<span className='form__contact--radio-btn' />
							Personal
						</label>
					</div>

					<div className='form__contact--radio'>
						<input type='radio' name='type' id='Professional' className='form__contact--radio-input' />
						<label
							htmlFor='Professional'
							value='professional'
							className='form__contact--radio-label'
							checked={type === 'personal'}
							onChange={onChange}>
							<span className='form__contact--radio-btn' />
							Professional
						</label>
					</div>
				</div>

				<button className='form__contact--submit' type='submit'>
					{current ? 'Update Contact' : 'Add Contact'}
					<svg className='form__contact--submit--icon'>
						<use xlinkHref='img/sprite.svg#icon-circle-with-plus' />
					</svg>
				</button>
			</form>
		</section>
	);
};

const mapStateToProps = (state) => ({
	current: state.contacts.current
});

export default connect(mapStateToProps, { addContact, updateContact, clearCurrent })(ContactForm);
