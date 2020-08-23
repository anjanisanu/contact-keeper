import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = (props) => {
	const { component: Component, isAuthenticated, loading, ...rest } = props;
	return (
		<Route
			{...rest}
			render={(props) => (!isAuthenticated && !loading ? <Redirect to='/login' /> : <Component {...props} />)}
		/>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
	loading: state.auth.loading
});

export default connect(mapStateToProps, {})(PrivateRoute);
