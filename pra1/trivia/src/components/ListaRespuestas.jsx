import { useState,useContext } from "react";
import PreguntaAcualContext from "../context/DataTriviaContext";
import Respuesta from "./Respuesta";

const ListaRespuestas = ({ respuestasIncorrectas, respuestaCorrecta }) => {
  const { preguntaActual, setPreguntaActual,estadisticas,setEstadisticas } =
  useContext(PreguntaAcualContext);

const [pintarRespuestas, setPintarRespuestas] = useState(false)
const [indiceSeleccionado,setIndiceSeleccionado]=useState("")

const onRespuesta = (respuesta,indice) => {
  setPintarRespuestas(true)
  setIndiceSeleccionado(indice)

 const isRespuestaCorrecta = respuesta === respuestaCorrecta;

 if (isRespuestaCorrecta) {
  const nuevaEstadistica = {
    ...estadisticas,
    respuestasCorrectas: estadisticas.respuestasCorrectas + 1,
  };
  setEstadisticas(nuevaEstadistica);
} else {
  const nuevaEstadistica = {
    ...estadisticas,
    respuestasIncorrectas: estadisticas.respuestasIncorrectas + 1,
  };
  setEstadisticas(nuevaEstadistica);
}



 const timeoutId = setTimeout(() => {
  setPreguntaActual(preguntaActual + 1);
  setPintarRespuestas(false)

}, 500);
setTimeout(() => clearTimeout(timeoutId), 500 + 1)
};

  const respuestas = [...respuestasIncorrectas, respuestaCorrecta];
  return (
    <div id="lista-respuestas" className="borde-rojo">
      {respuestas.map((respuesta,indice) => (
        <Respuesta
          respuesta={respuesta}
          key={respuesta}
          respuestaCorrecta={respuestaCorrecta}
          onRespuesta={onRespuesta}
          pintarRespuestas={pintarRespuestas}
          indice={indice}
          indiceSeleccionado={indiceSeleccionado}
        />
      ))}
    </div>
  );
};

export default ListaRespuestas;
