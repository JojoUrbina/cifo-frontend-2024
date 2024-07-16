import { useContext, createContext, useState, useEffect } from "react";
import ConfigutacionesContext from "./ConfiguracionesContext";
const DataTriviaContext = createContext();

export const DataTriviaProvider = ({ children }) => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [dataTrivia, setDataTrivia] = useState([]);
  const [estadisticas, setEstadisticas] = useState({
    respuestasCorrectas: 0,
    respuestasIncorrectas: 0,
  });

  const { configuraciones } = useContext(ConfigutacionesContext);

  const apiUrl = "https://opentdb.com/api.php?type=multiple";

  function obtenerCategoria(categoriaSeleccionada) {
    switch (categoriaSeleccionada) {
      case "Sports":
        return 21;
      case "Geography":
        return 22;
      case "Animals":
        return 27;
    }
  }

  useEffect(() => {
    const categoria = obtenerCategoria(configuraciones.category);

    const fetchData = async () => {
      const filterNumber = "&amount=" + configuraciones.number;
      const filterCategory = "&category=" + categoria;
      const filterDifficulty =
        "&difficulty=" + configuraciones.difficulty.toLowerCase();
      const response = await fetch(
        `${apiUrl}${filterNumber}${filterCategory}${filterDifficulty}`
      );
      const data = await response.json();
      setDataTrivia(data.results);
    };
    fetchData();
    setEstadisticas({
      respuestasCorrectas: 0,
      respuestasIncorrectas: 0,
    });
    setPreguntaActual(0);
  }, [configuraciones]);

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
