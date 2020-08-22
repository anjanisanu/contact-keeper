import React from 'react';
import { connect } from 'react-redux';

import ContactItem from './ContactItem';

const ContactItems = ({ contacts }) => {
	return (
		<section className='cards'>
			<div className='filter'>
				<form className='filter__form'>
					<div className='filter__form--field'>
						<svg className='filter__form--field--icon'>
							<use xlinkHref='img/sprite.svg#icon-magnifying-glass' />
						</svg>
						<input type='text' placeholder='Filter Contacts' className='filter__form--field--input' />
					</div>
				</form>
			</div>

			{contacts.map((contact) => <ContactItem key={contact.id} contact={contact} />)}
		</section>
	);
};

const mapStateToProps = (state) => ({
	contacts: state.contacts.contacts
});

export default connect(mapStateToProps, {})(ContactItems);
