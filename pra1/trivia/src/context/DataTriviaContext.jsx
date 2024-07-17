import { useContext, createContext, useState, useEffect } from "react";
import ConfiguracionesContext from "./ConfiguracionesContext";
const DataTriviaContext = createContext();

export const DataTriviaProvider = ({ children }) => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [dataTrivia, setDataTrivia] = useState([]);

  const [estadisticas, setEstadisticas] = useState(
    JSON.parse(localStorage.getItem("estadisticas")) || {
      respuestasCorrectas: 0,
      respuestasIncorrectas: 0,
      puntuacionMaxima: 0,
      partidasJugadas: 0,
    }
  );
  const { configuraciones } = useContext(ConfiguracionesContext);
  const [partidaTeminada, setPartidaTerminada] = useState(false);
  const [reiniciarPartida, setReiniciarPartida] = useState(false);

  useEffect(() => {
    localStorage.setItem("estadisticas", JSON.stringify(estadisticas));

    if (estadisticas.respuestasCorrectas > estadisticas.puntuacionMaxima) {
      setEstadisticas((prevEstadisticas) => ({
        ...prevEstadisticas,
        puntuacionMaxima: estadisticas.respuestasCorrectas,
      }));
    }
  }, [estadisticas]);

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
     /*  const response = await fetch(
        `${apiUrl}${filterNumber}${filterCategory}${filterDifficulty}`
      ); */
      const response = await fetch("/preguntas.json");
      const data = await response.json();
      //setDataTrivia(data.results);
      setDataTrivia(data);
    };
    setDataTrivia([]);

    const timeoutId = setTimeout(() => {
      fetchData();
    }, 1000);

    setEstadisticas((prevEstadisticas) => ({
      ...prevEstadisticas,
      respuestasCorrectas: 0,
      respuestasIncorrectas: 0,
    }));
    setPreguntaActual(0);
    setPartidaTerminada(false);
    return () => clearTimeout(timeoutId);
  }, [configuraciones, reiniciarPartida]);

  return (
    <DataTriviaContext.Provider
      value={{
        dataTrivia,
        preguntaActual,
        setPreguntaActual,
        estadisticas,
        setEstadisticas,
        partidaTeminada,
        setPartidaTerminada,
        reiniciarPartida,
        setReiniciarPartida,
      }}
    >
      {children}
    </DataTriviaContext.Provider>
  );
};
export default DataTriviaContext;
