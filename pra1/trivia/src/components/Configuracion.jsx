import { useContext } from "react";
import ConfiguracionesContext from "../context/ConfiguracionesContext.jsx";
import DataTriviaContext from "../context/DataTriviaContext.jsx";

const Configuracion = ({ property, text, first, second, third,disabled }) => {
  const { configuraciones, actualizarConfiguracion } = useContext(
    ConfiguracionesContext
  );
  const { estadisticas } = useContext(DataTriviaContext);

  const { puntuacionMaxima } = estadisticas;

  const hasDisabled = disabled
  return (
    <div className="configuracion">
      <h2>{text}</h2>
      <button
        onClick={(e) => actualizarConfiguracion(property, e.target.textContent)}
        className={configuraciones[property] === first ? "btn-selected" : ""}
      >
        {first}
      </button>
      <button
        onClick={(e) => actualizarConfiguracion(property, e.target.textContent)}
        className={configuraciones[property] === second ? "btn-selected" : ""}
      >
        {second}
      </button>
      <button
        disabled={hasDisabled && puntuacionMaxima < 3}

        onClick={(e) => actualizarConfiguracion(property, e.target.textContent)}
        className={configuraciones[property] === third ? "btn-selected" : ""}
      >
        {/* Para señalar la explicacion en el modo Hard, y al estar disponible, desaparezca el asterisco. */}
        {`${hasDisabled && puntuacionMaxima < 3 ?  "*" : ""}${third}`}
      </button>
    </div>
  );
};

export default Configuracion;
