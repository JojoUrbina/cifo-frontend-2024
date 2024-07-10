import { useContext } from 'react'
import SettingsContext from '../context/SettingsContext'

const Setting = ({ property, text, first, second }) => {
  const { settings, updateSetting } = useContext(SettingsContext)

  return (
    <div className='setting'>
      <p>{text}</p>
      <button
        onClick={(e) => updateSetting(property, e.target.textContent)}
        className={settings[property] === first ? 'btn-selected' : ''}
      >
        {first}
      </button>
      <button
        onClick={(e) => updateSetting(property, e.target.textContent)}
        className={settings[property] === second ? 'btn-selected' : ''}
      >
        {second}
      </button>
      {/* TODO #8++
      /// Afegeix el segon botó de cada Setting perquè es mostri i funcioni com al vídeo.
      Añade el segundo botón de cada Setting para que se muestre y funcione como en el vídeo */}
    </div>
  )
}

export default Setting
