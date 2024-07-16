import { createContext, useState } from 'react'



const ConfiguracionesContext = createContext()

export const ConfiguracionesProvider = ({ children }) => {
  const [configuraciones, setConfiguraciones] = useState({
    number: '6',
    category: 'Sports',
    difficulty:"Easy"
  })

  const actualizarConfiguracion = (property, value) => {
    setConfiguraciones({ ...configuraciones, [property]: value })
  }

  return <ConfiguracionesContext.Provider value={{ configuraciones, actualizarConfiguracion }}>{children}</ConfiguracionesContext.Provider>
}

export default ConfiguracionesContext
