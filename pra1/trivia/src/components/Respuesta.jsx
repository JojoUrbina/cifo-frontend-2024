import { useContext } from "react";
import PreguntaAcualContext from "../context/preguntaActualContext";


const Respuesta = ({respuesta}) => {

  const {siguientePregunta,preguntaActual} = useContext(PreguntaAcualContext)
  
console.log(preguntaActual);
  return (
    <div id='respuesta' className='borde-rojo text-center'><h4 onClick={siguientePregunta}>{respuesta} </h4></div>
  )
}

export default Respuesta