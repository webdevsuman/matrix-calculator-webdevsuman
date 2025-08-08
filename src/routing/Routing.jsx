import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import GeneratedMatrixPage from "../pages/GeneratedMatrixPage";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/matrix/:rows/:cols" element={<GeneratedMatrixPage />} />
      </Routes>
    </>
  );
};

export default Routing;
