import NavBar from "./components/NavBar";
import { DataTriviaProvider } from "./context/DataTriviaContext";
import { ConfiguracionesProvider } from "./context/ConfiguracionesContext";
import Configuraciones from "./components/Configuraciones";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Instrucciones from "./components/Instrucciones";
import NotFound from "./components/NotFound";
function App() {
  

  return (
    <ConfiguracionesProvider>
      <DataTriviaProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={<Home/>}/>
            <Route path="/Configuraciones" element={<Configuraciones />} />
            <Route path="/Instrucciones" element={<Instrucciones />} />
            <Route path="*" element={<NotFound />} />

          </Routes>
        </Router>
      </DataTriviaProvider>
    </ConfiguracionesProvider>
  );
}

export default App;
