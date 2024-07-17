import NavBar from "./components/NavBar";
import { DataTriviaProvider } from "./context/DataTriviaContext";
import { ConfiguracionesProvider } from "./context/ConfiguracionesContext";
import Configuraciones from "./components/Configuraciones";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
function App() {
  

  return (
    <ConfiguracionesProvider>
      <DataTriviaProvider>
        <Router>
          <NavBar />
          <h1 className="text-center">Trivia 3.0</h1>
          <Routes>
            <Route
              path="/"
              element={<Home/>}/>
            <Route path="/Configuraciones" element={<Configuraciones />} />
          </Routes>
        </Router>
      </DataTriviaProvider>
    </ConfiguracionesProvider>
  );
}

export default App;
