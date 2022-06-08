import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home, Login, SignUp } from "./pages";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login" element={<Login />} />
        <Route path="sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
