import ContadorTiempo from "./ContadorTiempo";
import ContadorPreguntas from "./ContadorPreguntas";
import Pregunta from "./Pregunta";
import ListaRespuestas from "./ListaRespuestas";
import { useContext, useEffect, useState } from "react";
import PreguntaActualContext from "../context/preguntaActualContext";

const Trivia = () => {
  const [dataTrivia, setDataTrivia] = useState([]);

  const { preguntaActual } = useContext(PreguntaActualContext);
  useEffect(() => {
    //aqui le colocaremos la configuracion
    const fetchData = async () => {
      const apiUrl = "/preguntas.json";
      const respuesta = await fetch(apiUrl);
      const data = await respuesta.json();
      setDataTrivia(data);
    };
    fetchData();
  }, []);

  if (dataTrivia.length === 0) {
    return <div className="text-center">Cargando..</div>; // Mostrar  spinner de carga
  }

  return (
    <div className="container borde-rojo">
      <ContadorTiempo />
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
