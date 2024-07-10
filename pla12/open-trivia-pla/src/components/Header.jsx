import NavBar from './NavBar'

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='logo'>Open Trivia February 2024</div>
        <NavBar/>
        {/* TODO #3++
        /// Manca afegir un component aquí (ja el tenim creat en un altre arxiu).
        Falta añadir un componente aquí (ya lo tenemos creado en otro archivo) */}
      </div>
    </header>
  )
}

export default Header
