import React from 'react';
import { connect } from 'react-redux';

const Alerts = ({ alerts }) => {
	return (
		alerts.length > 0 &&
		alerts.map((alert) => (
			<section key={alert.id} className='alerts'>
				<div className={`alert alert__${alert.type}`}>{alert.msg}</div>
			</section>
		))
	);
};

const mapStateToProps = (state) => ({
	alerts: state.alerts
});

export default connect(mapStateToProps, {})(Alerts);
