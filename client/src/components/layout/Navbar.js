import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
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
						<Link to='/'>
							<span>About</span>
							<svg className='navbar__links--icon'>
								<use xlinkHref='img/sprite.svg#icon-info-with-circle' />
							</svg>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<span>Login</span>
							<svg className='navbar__links--icon'>
								<use xlinkHref='img/sprite.svg#icon-login' />
							</svg>
						</Link>
					</li>
					<li>
						<Link to='/'>
							<span>Register</span>
							<svg className='navbar__links--icon'>
								<use xlinkHref='img/sprite.svg#icon-log-out' />
							</svg>
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
