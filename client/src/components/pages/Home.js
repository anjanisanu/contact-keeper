import React, { Fragment } from 'react';
import ContactForm from './../contacts/ContactForm';
import ContactItems from './../contacts/ContactItems';

const Home = () => {
	return (
		<Fragment>
			<ContactForm />
			<ContactItems />
		</Fragment>
	);
};

export default Home;
