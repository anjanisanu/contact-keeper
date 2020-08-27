import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { getContacts } from './../../actions/contactActions';
import ContactItem from './ContactItem';
import Spinner from './../layout/Spinner';

const ContactItems = ({ contacts, getContacts }) => {
	useEffect(() => {
		getContacts();
		//eslint-disable-next-line
	}, []);
	return (
		<Fragment>
			{contacts !== null ? (
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

					{contacts.map((contact) => <ContactItem key={contact._id} contact={contact} />)}
				</section>
			) : (
				<Spinner />
			)}
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	contacts: state.contacts.contacts
});

export default connect(mapStateToProps, { getContacts })(ContactItems);
