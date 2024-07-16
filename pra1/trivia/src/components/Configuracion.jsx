import { useContext } from 'react'
import ConfiguracionContext from '../context/configuracionContext.jsx'

const Configuracion = ({ propiedad, texto, primero, segundo }) => {
  const { Configuraciones, actualizarConfiguracion } = useContext(ConfiguracionContext)

  return (
    <div className='Configuracion'>
      <p>{texto}</p>
      <button
        onClick={(e) => actualizarConfiguracion(propiedad, e.target.textContent)}
        className={Configuraciones[propiedad] === primero ? 'btn-selected' : ''}
      >
        {primero}
      </button>
      <button
        onClick={(e) => actualizarConfiguracion(propiedad, e.target.textContent)}
        className={Configuraciones[propiedad] === segundo ? 'btn-selected' : ''}
      >
        {segundo}
      </button>

    </div>
  )
}

export default Configuracion
