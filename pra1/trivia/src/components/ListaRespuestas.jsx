import Respuesta from "./Respuesta";

const ListaRespuestas = ({ respuestasIncorrectas, respuestaCorrecta }) => {
  const respuestas = [...respuestasIncorrectas, respuestaCorrecta];

  return (
    <div id="lista-respuestas" className="borde-rojo">
      {respuestas.map((respuesta) => (
        <Respuesta
          respuesta={respuesta}
          key={respuesta}
          respuestaCorrecta={respuestaCorrecta}
        />
      ))}
    </div>
  );
};

export default ListaRespuestas;
