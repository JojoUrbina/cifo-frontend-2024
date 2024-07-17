import { useState, useContext, useEffect } from "react";
import PreguntaAcualContext from "../context/DataTriviaContext";
import Respuesta from "./Respuesta";

const ListaRespuestas = ({ respuestasIncorrectas, respuestaCorrecta }) => {
  const {
    dataTrivia,
    preguntaActual,
    setPreguntaActual,
    estadisticas,
    setEstadisticas,
    setPartidaTerminada,
  } = useContext(PreguntaAcualContext);

  const [pintarRespuestas, setPintarRespuestas] = useState(false);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState(null);
  const [respuestas, setRespuestas] = useState([]);

  useEffect(() => {
    setRespuestas(
      [...respuestasIncorrectas, respuestaCorrecta].sort(
        () => Math.random() - 0.5
      )
    );
  }, [respuestaCorrecta, respuestasIncorrectas]);

  const totalPreguntas = dataTrivia.length;

  const actualizarEstadisticas = (esCorrecta) => {
    setEstadisticas((prevEstadisticas) => ({
      ...prevEstadisticas,
      respuestasCorrectas: esCorrecta
        ? prevEstadisticas.respuestasCorrectas + 1
        : prevEstadisticas.respuestasCorrectas,
      respuestasIncorrectas: !esCorrecta
        ? prevEstadisticas.respuestasIncorrectas + 1
        : prevEstadisticas.respuestasIncorrectas,
    }));
  };

  const onRespuesta = (respuesta) => {
    if (
      estadisticas.respuestasCorrectas + estadisticas.respuestasIncorrectas >=
      totalPreguntas
    ) {
      return;
    }

    setPintarRespuestas(true);
    setRespuestaSeleccionada(respuesta);

    const isRespuestaCorrecta = respuesta === respuestaCorrecta;
    actualizarEstadisticas(isRespuestaCorrecta);

    setTimeout(() => {
      setPintarRespuestas(false);
      if (
        estadisticas.respuestasCorrectas + estadisticas.respuestasIncorrectas >=
        totalPreguntas - 1
      ) {
        setEstadisticas((prevEstadisticas) => ({
          ...prevEstadisticas,
          partidasJugadas: prevEstadisticas.partidasJugadas + 1,
        }));

        setPartidaTerminada(true);
        return;
      }

      setPreguntaActual(preguntaActual + 1);
    }, 500);
  };

  return (
    <div id="lista-respuestas" className="borde-rojo">
      {respuestas.map((respuesta) => (
        <Respuesta
          respuesta={respuesta}
          key={respuesta}
          respuestaCorrecta={respuestaCorrecta}
          onRespuesta={onRespuesta}
          pintarRespuestas={pintarRespuestas}
          respuestaSeleccionada={respuestaSeleccionada}
        />
      ))}
    </div>
  );
};

export default ListaRespuestas;
