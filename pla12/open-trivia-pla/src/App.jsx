// TODO #11++
// Afegeix els `import` que manquen per poder treballar amb rutes.
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Settings from "./components/Settings";
import Questions from "./components/Questions";
import NotFound from "./components/NotFound";
import { SettingsProvider } from "./context/SettingsContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <SettingsProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" exact element={<Questions/>} />
          <Route path="/about"  element={<About />} />
          <Route path="/settings" element={<Settings />} />

          {/* TODO #12++
          /// Afegeix rutes per la pàgina About i per la pàgina Settings. 
          Añade rutas por la página About y por la página Settings.*/}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </SettingsProvider>
  );
}

export default App;