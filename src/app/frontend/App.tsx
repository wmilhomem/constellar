import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/app/frontend/pages/Home";
import Onboarding from "@/app/frontend/pages/Onboarding";
import Diagnostico from "@/app/frontend/pages/Diagnostico";
import Sessao from "@/app/frontend/pages/Sessao";
import Resultado from "@/app/frontend/pages/Resultado";

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
