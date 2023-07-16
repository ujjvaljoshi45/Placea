import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const PLANNEWTRIP = React.lazy(() => import("pages/PLANNEWTRIP"));
const HOME1 = React.lazy(() => import("pages/HOME1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<HOME1 />} />
          <Route path="*" element={<HOME1 />} />
          <Route path="/home1" element={<HOME1 />} />
          <Route path="/plannewtrip" element={<PLANNEWTRIP />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
