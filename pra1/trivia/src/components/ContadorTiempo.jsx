const ContadorTiempo = ( {estadisticas}) => {
  return (
    <div id="estadisticas" className="borde-rojo">
    <div id="contador-tiempo" className="borde-rojo">
      <p>{estadisticas.respuestasCorrectas}</p>Respuestas correctas
    </div>
    <div id="contador-tiempo" className="borde-rojo">
      <p>{estadisticas.respuestasIncorrectas}</p>Respuestas Incorrectas
    </div>
    <div id="contador-tiempo" className="borde-rojo">
      <p>30</p>Puntaje Maximo
    </div>
    
    </div>
  );
};

export default ContadorTiempo;
