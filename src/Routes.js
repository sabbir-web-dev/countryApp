import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

import Header from "./Components/Header/Header";
import Error from "./Pages/Error";
import Country from "./Components/Country/Country";

function RouteApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryName" element={<Country />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
