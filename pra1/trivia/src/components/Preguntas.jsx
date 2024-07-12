import ContadorTiempo from "./ContadorTiempo";
import ContadorPreguntas from "./ContadorPreguntas";
import Pregunta from "./Pregunta";
import ListaRespuestas from "./ListaRespuestas";
const Preguntas = () => {
  return (
    <div className="container borde-rojo">
      <ContadorTiempo  />
      <ContadorPreguntas/>
      <Pregunta/>
      <ListaRespuestas/>
    </div>
  );
};

export default Preguntas;
