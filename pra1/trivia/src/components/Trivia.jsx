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
      <div className="container ">
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
      
    </>
  );
};

export default Trivia;
