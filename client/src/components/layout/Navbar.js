import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from './../../actions/authActions';
import { clearContacts } from './../../actions/contactActions';

const Navbar = ({ isAuthenticated, logout, clearContacts }) => {
	const onLogout = () => {
		logout();
		clearContacts();
	};
	const publicRoute = (
		<Fragment>
			<li>
				<Link to='/login'>
					<span>Login</span>
					<svg className='navbar__links--icon'>
						<use xlinkHref='img/sprite.svg#icon-login' />
					</svg>
				</Link>
			</li>
			<li>
				<Link to='/register'>
					<span>Register</span>
					<svg className='navbar__links--icon'>
						<use xlinkHref='img/sprite.svg#icon-log-out' />
					</svg>
				</Link>
			</li>
		</Fragment>
	);

	const privateRoute = (
		<Fragment>
			<li>
				<Link to='/' onClick={onLogout}>
					<span>Logout</span>
					<svg className='navbar__links--icon'>
						<use xlinkHref='img/sprite.svg#icon-log-out' />
					</svg>
				</Link>
			</li>
		</Fragment>
	);
	return (
		<header className='header'>
			<nav className='navbar'>
				<div className='navbar__logo'>
					<a href='/'>
						<svg className='navbar__logo--icon'>
							<use xlinkHref='img/sprite.svg#icon-grid' />
						</svg>
						<span className='navbar__logo--brand'>Contact Keeper</span>
					</a>
				</div>
				<ul className='navbar__links'>
					<li>
						<Link to='/'>
							<span>Home</span>
							<svg className='navbar__links--icon'>
								<use xlinkHref='img/sprite.svg#icon-home' />
							</svg>
						</Link>
					</li>
					<li>
						<Link to='/about'>
							<span>About</span>
							<svg className='navbar__links--icon'>
								<use xlinkHref='img/sprite.svg#icon-info-with-circle' />
							</svg>
						</Link>
					</li>
					{isAuthenticated ? privateRoute : publicRoute}
				</ul>
			</nav>
		</header>
	);
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logout, clearContacts })(Navbar);
