import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "./routes/LandingPage";
import { BuyCornPage } from "./routes/BuyCornPage";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/buy" element={<BuyCornPage />} />
      </Routes>
    </Router>
  );
}