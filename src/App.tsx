import{ BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import PasanakuMontly from "./pages/pasanakuMontly";
import PasanakuDaily from "./pages/pasanakuDaily";
import PasanakuWeekly from "./pages/pasanakuWeekly";
import PasanakuAuction from "./pages/pasanakuAuction";
import PasanakuPrivate from "./pages/pasanakuPrivate";
import PasanakuPublic from "./pages/pasanakuPublic";


function App() {
  const pasanakuTypes = [
    {
      title: "mensual",
      component: PasanakuMontly
    },
    {
      title: "diario",
      component: PasanakuDaily
    },
    {
      title: "semanal",
      component: PasanakuWeekly 
    },
    {
      title: "subastas",
      component: PasanakuAuction
    },
    {
      title: "privado",
      component: PasanakuPrivate
    },
    {
      title: "publico",
      component: PasanakuPublic
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {pasanakuTypes.map((type) => (
          <Route path={`/pasanaku-${type.title.toLowerCase()}`} element={<type.component />} />
        ))}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}



export default App;
