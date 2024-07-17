
const Respuesta = ({
  respuesta,
  respuestaCorrecta,
  onRespuesta,
  pintarRespuestas,
  respuestaSeleccionada
}) => {
  const isCorrecta = respuesta === respuestaCorrecta;
  const esRespuestaSeleccionada = respuesta === respuestaSeleccionada
  const colorRespuestaCorrecta = isCorrecta ? "respuesta-correcta" : "" 
  const colorRespuestaSeleccionada =esRespuestaSeleccionada && !isCorrecta ? "respuesta-incorrecta":""

  return (
    <div
      onClick={() => onRespuesta(respuesta)}
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

