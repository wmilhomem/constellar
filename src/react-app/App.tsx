import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import Onboarding from "@/react-app/pages/Onboarding";
import Diagnostico from "@/react-app/pages/Diagnostico";
import Sessao from "@/react-app/pages/Sessao";
import Resultado from "@/react-app/pages/Resultado";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/diagnostico" element={<Diagnostico />} />
        <Route path="/sessao" element={<Sessao />} />
        <Route path="/resultado" element={<Resultado />} />
      </Routes>
    </Router>
  );
}
