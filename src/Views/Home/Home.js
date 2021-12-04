import React from 'react';
import "./Home.css";
import Foto from '../../components/imagenes/salesHimalaya.jpg';

function Home() {
	return (
		<div style={{ padding: 40 }}>
		<img className="portada" src = {Foto} alt="Foto"></img>	
		</div>
	);
}

export default Home;