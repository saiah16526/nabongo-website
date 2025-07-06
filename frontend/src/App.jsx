import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NabongoInstitute from "./pages/Nabongo-Institute";
import NabongoTTC from "./pages/Nabongo-TTC";
import NabongoJr from "./pages/Nabongo-Jr";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 👈 This forces the scroll to top */}
      <Routes>
        <Route path="/" element={<NabongoInstitute />} />
        <Route path="/ttc" element={<NabongoTTC />} />
        <Route path="/jr" element={<NabongoJr />} />
      </Routes>
    </Router>
  );
}

export default App;
