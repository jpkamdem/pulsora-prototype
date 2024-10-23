import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Calendrier from "./pages/Calendrier";
import Actus from "./pages/Actus";
import Aide from "./pages/Aide";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Suivis from "./pages/Suivis";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <div className="h-screen bg-light-green">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/actus" element={<Actus />} />
          <Route path="/aide" element={<Aide />} />
          <Route path="/calendrier" element={<Calendrier />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/suivis" element={<Suivis />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}
