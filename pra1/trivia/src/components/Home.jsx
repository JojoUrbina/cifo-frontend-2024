import FinPartida from "./FinPartida";
import Trivia from "./Trivia";
import { useContext } from "react";
import DataTriviaContext from "../context/DataTriviaContext";
const Home = () => {
  const { partidaTeminada,  setPartidaTerminada } =
    useContext(DataTriviaContext);
 

  return (
    <>
      <h1
        id="titulo-trivia"
        onClick={() => setPartidaTerminada(true)}
        className="text-center"
      >
        Trivia 3.0
      </h1>

      {partidaTeminada ? <FinPartida /> : <Trivia />}

    </>
  );
};

export default Home;
