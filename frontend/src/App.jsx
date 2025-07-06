import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NabongoInstitute from "./pages/Nabongo-Institute";
import NabongoTTC from "./pages/Nabongo-TTC";
import NabongoJr from "./pages/Nabongo-Jr";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NabongoInstitute />} />
        <Route path="/ttc" element={<NabongoTTC />} />
        <Route path="/jr" element={<NabongoJr />} />
      </Routes>
    </Router>
  );
}

export default App;
