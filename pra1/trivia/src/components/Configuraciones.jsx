import Configuracion from "./Configuracion";
const Configuraciones = () => {
  return (
    <div className="configuraciones" >
    <Configuracion property='number' text='Number of questions' first='6' second='8' third="12" />
    <Configuracion property='difficulty' text='Difficulty' first='Easy' second='Medium' third="Hard" disabled={true} />
    <Configuracion property='category' text='Category' first='Sports' second='Geography' third="Animals" />
   <p>{`*Para desbloquear el modo "Hard" debe responder como minimo 3 preguntas correctamente.`}</p>
  </div>
  )
}

export default Configuraciones