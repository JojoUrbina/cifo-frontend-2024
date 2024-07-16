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
        <li>Sobre nosotros</li>
        <li>Not Found</li>
      </ul>
    </nav>
  );
};
export default NavBar;
