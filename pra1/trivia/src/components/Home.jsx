import FinPartida from "./FinPartida";
import Trivia from "./Trivia";
import { useContext } from "react";
import DataTriviaContext from "../context/DataTriviaContext";
const Home = () => {
  const { partidaTeminada } = useContext(DataTriviaContext);
  return <>{partidaTeminada ? <FinPartida /> : <Trivia />}</>;
};

export default Home;
