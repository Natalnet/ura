import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Home from "../pages/Home";
import Desenvolvimento from "../pages/Desenvolvimento";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Route component={Home} path="/" exact />
      <Route component={Desenvolvimento} path="/desenvolvimento" exact />
    </BrowserRouter>
  );
};

export default Routes;
