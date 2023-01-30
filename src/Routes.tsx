import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import View from "./pages/View";
import Home from "./pages/Home";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
