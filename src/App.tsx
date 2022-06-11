import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Home, Init, AuthPage } from "./pages";

import { AppProvider } from "./contexts/appContext";

const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Init />} />
          <Route path="/auth/login" element={<AuthPage />} />
          <Route path="/auth/sign-up" element={<AuthPage />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="*" element={<Init />} />
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
