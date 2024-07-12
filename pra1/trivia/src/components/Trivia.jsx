import ContadorTiempo from "./ContadorTiempo";
import ContadorPreguntas from "./ContadorPreguntas";
import Pregunta from "./Pregunta";
import ListaRespuestas from "./ListaRespuestas";
import { useContext } from "react";
import DataTriviaContext from "../context/DataTriviaContext";

const Trivia = () => {
  const { preguntaActual, dataTrivia,estadisticas } = useContext(DataTriviaContext);

  if (dataTrivia.length === 0) {
    return <div className="text-center">Cargando..</div>; // Mostrar  spinner de carga
  }

  return (
    <div className="container borde-rojo">
      <ContadorTiempo estadisticas={estadisticas} />
      <ContadorPreguntas
        preguntaActual={preguntaActual}
        totalPreguntas={dataTrivia.length}
      />
      <Pregunta pregunta={dataTrivia[preguntaActual].question} />
      <ListaRespuestas
        respuestasIncorrectas={dataTrivia[preguntaActual].incorrect_answers}
        respuestaCorrecta={dataTrivia[preguntaActual].correct_answer}
      />
    </div>
  );
};

export default Trivia;
