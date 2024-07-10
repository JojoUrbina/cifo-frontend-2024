import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/settings">settings</Link>
        </li>
        {/* TODO #4++
        /// Afegeix un enllaç a /settings per mostrar el component Settings.
        Añade un enlace a /settings para mostrar el componente Settings. */}
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="*">Not Found</Link>
        </li>
        {/* TODO #5
        /// Afegeix un enllaç a /nothing per comprovar si la ruta NotFound funciona bé.
        Añade un enlace a /nothing para comprobar si la ruta NotFound funciona bien. */}
      </ul>
    </nav>
  );
};

export default NavBar;
