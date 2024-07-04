import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// TODO #1
// D'on venen els mètodes createRoot i render de les línies següents?
/* Provienen del paquete react-dom/client y forma de la biblioteca React ademas se utiliza para interactuar con el DOM */
// D'on ve l'element amb identificador root?
/* Proviene del HTML de la aplicación y generalmente, se define en el archivo index.html siendo este un contenedor vacío donde React inyecta y renderiza toda la aplicación */
// Què fa el mètode render?
/* Se encarga de renderizar un componente de React dentro del contenedor especificado en el DOM que en este caso es el elemento con id root */


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
