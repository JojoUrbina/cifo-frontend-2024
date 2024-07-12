const ContadorPreguntas = ({ preguntaActual, totalPreguntas }) => {
  return (
    <div id="contador-preguntas" className="borde-rojo">
      Pregunta {preguntaActual + 1} de {totalPreguntas}
    </div>
  );
};

export default ContadorPreguntas;
