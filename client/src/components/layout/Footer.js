import React from 'react';

const Footer = () => {
	return (
		<footer className='footer'>
			<p className='footer__copyright'>&copy; 2020 Contact Keeper App</p>
			<p className='footer__designed-by'>
				This App is designed &amp; developed with
				<svg className='footer__icon'>
					<use xlinkHref='img/sprite.svg#icon-heart-outlined' />
				</svg>{' '}
				by Anjani Sanu
			</p>
		</footer>
	);
};

export default Footer;
