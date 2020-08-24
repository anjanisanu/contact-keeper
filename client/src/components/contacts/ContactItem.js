import React from 'react';
import { connect } from 'react-redux';

import { setCurrent, deleteContact } from './../../actions/contactActions';

const ContactItem = ({ contact, setCurrent, deleteContact }) => {
	return (
		<div className='card'>
			<div className='card__name'>
				<h1 className='card__name--heading'>{contact.name}</h1>
				<span className='card__name--personal'>{contact.type}</span>
			</div>

			<div className='card__email'>
				<svg className='card__icon'>
					<use xlinkHref='img/sprite.svg#icon-mail' />
				</svg>
				{contact.email}
			</div>

			<div className='card__phone'>
				<svg className='card__icon'>
					<use xlinkHref='img/sprite.svg#icon-phone' />
				</svg>
				{contact.phone}
			</div>

			<div className='card__btn'>
				<button className='btn btn__edit' onClick={() => setCurrent(contact)}>
					<svg className='btn__icon'>
						<use xlinkHref='img/sprite.svg#icon-new-message' />
					</svg>
					Edit
				</button>
				<button className='btn btn__delete' onClick={() => deleteContact(contact._id)}>
					<svg className='btn__icon'>
						<use xlinkHref='img/sprite.svg#icon-box' />
					</svg>
					Delete
				</button>
			</div>
		</div>
	);
};

export default connect(null, { setCurrent, deleteContact })(ContactItem);
