import './style.css';
import React from 'react';
import NavBar from '../../../layouts/Public/Navbar/index';

const Index = () => {
    return (
        <React.Fragment>
            <div className="communityRulesContainer">
                <NavBar />
                <h1>ESPORTS PLATFORM - REGLAS DE LA COMUNIDAD</h1>
                <div className="rules">
                    <p>Queremos que ESPORTS PLATFORM sea un lugar seguro y divertido donde poder jugar y pasarlo bien con los amigos, y necesitamos vuestra ayuda para que siga siendo así.</p>
                    <p>Nuestras reglas de la comunidad se aplican a todos los usuarios de los juegos, servicios y entornos de Esports Platform. Estos principios constituyen una guía sobre cómo se debería interactuar con otras personas dentro del ecosistema de Esports Platform. Hemos incluido algunos ejemplos a continuación, pero el hecho de que algo no se haya especificado aquí no implica que sea aceptable. </p>
                    <p>Cumplid las reglas, no es tan difícil. Si infringís alguna de estas normas, podríamos tomar medidas contra vuestra cuenta, como expulsaros de forma permanente. </p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Index;
