import { createContext, useState, useEffect } from "react";
const DataTriviaContext = createContext();

export const DataTriviaProvider = ({ children }) => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [dataTrivia, setDataTrivia] = useState([]);
  const [estadisticas, setEstadisticas] = useState({
    respuestasCorrectas: 0,
    respuestasIncorrectas: 0,
  });
  useEffect(() => {
    //aqui le colocaremos la configuracion
    const fetchData = async () => {
      const apiUrl = "/preguntas.json";
      const respuesta = await fetch(apiUrl);
      const data = await respuesta.json();
      setDataTrivia(data);
    };
    fetchData();
  }, []);

  return (
    <DataTriviaContext.Provider
      value={{
        dataTrivia,
        preguntaActual,
        setPreguntaActual,
        estadisticas,
        setEstadisticas,
      }}
    >
      {children}
    </DataTriviaContext.Provider>
  );
};
export default DataTriviaContext;
