import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Prediction from "./pages/Predictions";
import PageWrapper from "./components/PageWrapper";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/recommendation" element={<Prediction />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
