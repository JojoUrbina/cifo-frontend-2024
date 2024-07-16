import Configuracion from "./Configuracion";
const Configuraciones = () => {
  return (
    <div >
    <Configuracion property='number' text='Number of questions' first='6' second='12' />
    <Configuracion property='difficulty' text='Difficulty' first='Easy' second='Medium' third="Hard" />
    <Configuracion property='category' text='Category' first='Sports' second='Geography' third="Animals" />
   

  </div>
  )
}

export default Configuraciones