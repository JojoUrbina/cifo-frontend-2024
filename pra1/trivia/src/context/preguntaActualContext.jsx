import { createContext, useState } from "react";
const PreguntaActualContext = createContext();

export const PreguntaActualProvider = ({ children }) => {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const siguientePregunta = () => {
    setPreguntaActual(preguntaActual + 1);
  };
  const anteriorPregunta = () => {
    if (preguntaActual === 0) return;
    setPreguntaActual(preguntaActual - 1);
  };
  return (<PreguntaActualContext.Provider value={{preguntaActual,siguientePregunta,anteriorPregunta}}
    >
      {children}
    </PreguntaActualContext.Provider>
  );
};
export default PreguntaActualContext;
