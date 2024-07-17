import { useContext } from "react";
import dataTriviaContext from "../context/DataTriviaContext";

const FinPartida = () => {
  const { estadisticas, reiniciarPartida, setReiniciarPartida } =
    useContext(dataTriviaContext);
  const { respuestasCorrectas, puntuacionMaxima, partidasJugadas } =
    estadisticas;
  const puntuacionPartida = respuestasCorrectas;

  const handleReiniciarPartida = (reiniciarPartida) => {
    setReiniciarPartida(!reiniciarPartida);
  };

  return (
    <div className="container text-center">
      <h2>Partida finalizada</h2>
      <div id="estadisticas" className="borde-rojo">
        <div id="contador-tiempo" className="borde-rojo">
          <p>{puntuacionPartida}</p>Puntuacion de Partida
        </div>
        <div id="contador-tiempo" className="borde-rojo">
          <p>{puntuacionMaxima}</p>Puntuacion Maxima
        </div>
        <div id="contador-tiempo" className="borde-rojo">
          <p>{partidasJugadas}</p>Partidas Completas
        </div>
      </div>
      <button
        onClick={() => {
          handleReiniciarPartida(reiniciarPartida);
        }}
      >
        Reiniciar Partida
      </button>
    </div>
  );
};

export default FinPartida;
