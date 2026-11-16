import React, { useEffect } from "react";
import Header from "./components/tsx/Header";
import Footer from "./components/tsx/Footer";
import AgentsPage from "./pages/AgentsPage";
import AgentPage from "./pages/AgentPage";
import MainPage from "./pages/MainPage";
import { Routes, Route, useLocation } from "react-router-dom";
import ScrollUpButton from "./components/tsx/mainComponents/ScrollUpButton";
import MapsPage from "./pages/MapsPage";
import WeaponsPage from "./pages/WeaponsPage";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/agents/:slug" element={<AgentPage />} />
        <Route path="/maps" element={<MapsPage />} />
        <Route path="/weapons" element={<WeaponsPage />} />
      </Routes>
      <Footer />
      <ScrollUpButton />
    </>
  );
};

export default App;
