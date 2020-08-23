import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import ContactForm from './../contacts/ContactForm';
import ContactItems from './../contacts/ContactItems';
import { loadUser } from './../../actions/authActions';

const Home = ({ loadUser, token }) => {
	useEffect(
		() => {
			if (token) loadUser();
		},
		// eslint-disable-next-line
		[ token ]
	);
	return (
		<Fragment>
			<ContactForm />
			<ContactItems />
		</Fragment>
	);
};

const mapStateToProps = (state) => ({
	token: state.auth.token
});

export default connect(mapStateToProps, { loadUser })(Home);
