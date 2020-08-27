import React from 'react';

function About() {
	return (
		<section class='cards-about'>
			<div class='card'>
				<div class='card__name'>
					<h1 class='card__name--heading'>About this App</h1>
				</div>

				<div class='card__about'>
					<h3 class='card__about--heading'>Version 1.0.0</h3>
					<p class='card__about--info'>This is a Full Stack App that can be used to store contact details online.</p>
					<p class='card__about--info'>
						This app is created using Node.js, MongoDB as back-end &amp; React in front-end.
					</p>
				</div>
			</div>
		</section>
	);
}

export default About;
