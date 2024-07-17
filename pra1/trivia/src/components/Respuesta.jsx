
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
  const sanitize = (text) =>
    text
      .replaceAll('&quot;', '"')
      .replaceAll('&#039;', "'")
      .replaceAll('&amp;', '&')
      .replaceAll('&deg;', 'º')
      .replaceAll('&shy;', '\u00AD')

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
      <h4>{sanitize(respuesta)} </h4>
    </div>
  );
};
export default Respuesta;

