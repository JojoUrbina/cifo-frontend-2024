import { useContext } from "react";
import ConfiguracionesContext from "../context/ConfiguracionesContext.jsx";

const Configuracion = ({ property, text, first, second, third }) => {
  const { configuraciones, actualizarConfiguracion } =
    useContext(ConfiguracionesContext);

  return (
    <div className="configuracion">
      <h2>{text}</h2>
      <button
        onClick={(e) =>
          actualizarConfiguracion(property, e.target.textContent)
        }
        className= {configuraciones[property] === first ? "btn-selected" : ""}
      >
        {first}
      </button>
      <button
        onClick={(e) =>
          actualizarConfiguracion(property, e.target.textContent)
        }
        className={configuraciones[property] === second ? "btn-selected" : ""}
      >
        {second}
      </button>
      <button
        onClick={(e) =>
          actualizarConfiguracion(property, e.target.textContent)
        }
        className={configuraciones[property] === third ? "btn-selected" : ""}
      >
        {third}
      </button>
    </div>
  );
};

export default Configuracion;
