import { useContext, useState } from "react";

const Respuesta = ({
  respuesta,
  respuestaCorrecta,
  onRespuesta,
  pintarRespuestas,
  indice,
  indiceSeleccionado
}) => {
  const isCorrecta = respuesta === respuestaCorrecta;
  const esIndiceSeleccionado = indice === indiceSeleccionado
  const colorRespuestaCorrecta = isCorrecta ? "respuesta-correcta" : "" 
  const colorRespuestaSeleccionada =esIndiceSeleccionado && !isCorrecta ? "respuesta-incorrecta":""



  return (
    <div
      onClick={() => onRespuesta(respuesta,indice)}
      id="respuesta"
      className={`text-center ${
        pintarRespuestas ? colorRespuestaCorrecta : ""
      }  ${
        pintarRespuestas ? colorRespuestaSeleccionada : ""
      } `}
    >
      <h4>{respuesta} </h4>
    </div>
  );
};
export default Respuesta;

/*  const timeoutId = setTimeout(() => {
      setPreguntaActual(preguntaActual + 1);
    }, 500);*/
/* const siguientePregunta = () => {
    if (preguntaActual === dataTrivia.length - 1) {
      setColorRespuestaSeleccionada("respuesta-correcta");
      return alert("ganaste");
    }
    setColorRespuestaSeleccionada("respuesta-correcta");
    const timeoutId = setTimeout(() => {
      setPreguntaActual(preguntaActual + 1);
    }, 500);
  };
  const anteriorPregunta = () => {
    if (preguntaActual === 0) {
      setColorRespuestaSeleccionada("respuesta-incorrecta");
      return;
    }

    setColorRespuestaSeleccionada("respuesta-incorrecta");
    const timeoutId = setTimeout(() => {
      setPreguntaActual(preguntaActual - 1);
    }, 500);
    setTimeout(() => clearTimeout(timeoutId), 500 + 1);
  }; */
/* seleccionado ? colorRespuestaSeleccionada : isRespuestaCorrecta ? "respuesta-correcta": "" */
