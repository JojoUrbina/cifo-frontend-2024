import Estadisticas from "./Estadisticas";
import ContadorPreguntas from "./ContadorPreguntas";
import Pregunta from "./Pregunta";
import ListaRespuestas from "./ListaRespuestas";
import { useContext } from "react";
import DataTriviaContext from "../context/DataTriviaContext";

const Trivia = () => {
  const { preguntaActual, dataTrivia } = useContext(DataTriviaContext);

  if (dataTrivia.length === 0) {
    return <div className="text-center">Cargando..</div>;
  }

  return (
    <>
      <div className="container borde-rojo">
        <Estadisticas />
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
      <div className="container">
        <p className="instrucciones">
          Haz clic en el título "Trivia 3.0" para finalizar la partida actual y
          ver los resultados.
        </p>
        <p className="instrucciones">
          Haz clic en el texto de categoría o dificultad para alternar entre
          mostrar la categoría de las preguntas y la dificultad.
        </p>
      </div>
    </>
  );
};

export default Trivia;
