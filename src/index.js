import React from 'react';
import ReactDOM from 'react-dom'; //biblio de react enfocada al navegador

import './assets/css/index.css';

import App from './App';
import * as serviceWorker from './serviceWorker'; //permite q la app siga funcionando sin conexion a internet

ReactDOM.render(<App />, document.getElementById('root'));//metodo render permite renderizar/pintar la app en pantall
//renderizamos la App y luego especificamos donde lo vamos a pintar(en index.html esta la seccion con el id='root')

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
