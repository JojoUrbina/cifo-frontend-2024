import { useState, useContext } from "react";
import DataTriviaContext from "../context/DataTriviaContext";

const Estadisticas = () => {
  const [mostrarCategoria, setMostrarCategoria] = useState(true);
  const { dataTrivia, estadisticas } = useContext(DataTriviaContext);
  const { respuestasCorrectas, respuestasIncorrectas } = estadisticas;
  const dificultadOCategoria = mostrarCategoria
    ? dataTrivia[0].category
    : dataTrivia[0].difficulty;

  const alternarMostrarCategoria = (mostrarCategoria) => {
    setMostrarCategoria(!mostrarCategoria);
  };

  return (
    <div id="estadisticas" className="borde-rojo">
      <div id="contador-tiempo" className="borde-rojo">
        <p>{respuestasCorrectas}</p>Respuestas correctas
      </div>
      <div id="contador-tiempo" className="borde-rojo">
        <p>{respuestasIncorrectas}</p>Respuestas Incorrectas
      </div>
      <div
        id="contador-tiempo"
        className="dificultad-o-categoria"
        onClick={() => {
          alternarMostrarCategoria(mostrarCategoria);
        }}
      >
        <p>{dificultadOCategoria}</p>
        {mostrarCategoria ? "Categoria" : "Dificultad"}
      </div>
    </div>
  );
};

export default Estadisticas;
