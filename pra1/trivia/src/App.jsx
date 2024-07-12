import NavBar from "./components/NavBar";
import Trivia from "./components/Trivia";
import { DataTriviaProvider } from "./context/DataTriviaContext";
function App() {
  return (
    <DataTriviaProvider>
      <NavBar />
      <h1 className="text-center">Trivia 3.0</h1>
      <Trivia />
    </DataTriviaProvider>
  );
}

export default App;
