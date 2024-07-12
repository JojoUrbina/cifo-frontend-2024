import NavBar  from "./components/NavBar";
import Trivia from "./components/Trivia";
import {PreguntaActualProvider} from "./context/preguntaActualContext";
function App() {
  return (
    <PreguntaActualProvider>
    <NavBar/>
    <h1 className="text-center">Trivia 3.0</h1>
    <Trivia/>
    </PreguntaActualProvider>
  );
}

export default App;
