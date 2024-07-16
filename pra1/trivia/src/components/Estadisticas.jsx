const Estadisticas = ({ estadisticas }) => {
  const { respuestasCorrectas, respuestasIncorrectas } = estadisticas;
  return (
    <div id="estadisticas" className="borde-rojo">
      <div id="contador-tiempo" className="borde-rojo">
        <p>{respuestasCorrectas}</p>Respuestas correctas
      </div>
      <div id="contador-tiempo" className="borde-rojo">
        <p>{respuestasIncorrectas}</p>Respuestas Incorrectas
      </div>
      <div id="contador-tiempo" className="borde-rojo">
        <p>Geography</p>Categoria
      </div>
    </div>
  );
};

export default Estadisticas;
