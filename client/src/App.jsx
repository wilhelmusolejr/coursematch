import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Prediction from "./pages/Predictions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recommendation" element={<Prediction />} />
      </Routes>
    </Router>
  );
}

export default App;
