import React from 'react';
import './About.css';

function About() {
	return (
		<div className='about' style={{ padding: 40 }}>
			<h1 className='titulo'>Sobre Mi</h1>
		<div className='parrafo'>
			<p>
			Somos el microemprendimiento lider en fabricación de productos de aromatización ambiental.

Desde nuestros comienzos nos posicionamos de manera estratégica en el mercado de la aromatización llegando a ser líderes en la industria. Nuestro objetivo es proveer al mercado local productos de alta calidad a precios competitivos y continuar expandiendo nuestra red de distribuidores en todo el territorio argentino. </p>
<p>Para garantizar la calidad de servicio hacia nuestros clientes, la compañía ofrece soporte permanente del departamento técnico así como del área comercial. Saphirus desarrolla y fabrica una amplia gama de aromatizadores ambientales en diferentes presentaciones y ofrece una gran variedad de fragancias.
			</p>
		</div>
		</div>
	);
}

export default About;