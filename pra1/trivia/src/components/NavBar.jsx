import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" >
          Inicio
          </Link>
        </li>
        <li>
          <Link to="/Configuraciones">Configuracion</Link>
        </li>
        <li>
          <Link to="/Instrucciones">Instrucciones</Link>
        </li>
        <li>
          <Link to="*">Not found</Link>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
