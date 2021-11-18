import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Form from "./components/Form";
import Result from "./components/Result";

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Form />}></Route>
        <Route path="/result" element={<Result />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
