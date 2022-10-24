import React from "react";
import Header from "./components/tsx/Header";
import AgentsPage from "./pages/AgentsPage";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import ScrollUpButton from "./components/tsx/mainComponents/ScrollUpButton";
import MapsPage from "./pages/MapsPage";
import WeaponsPage from "./pages/WeaponsPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/maps" element={<MapsPage />} />
        <Route path="/weapons" element={<WeaponsPage />} />
      </Routes>
      <ScrollUpButton />
    </>
  );
};

export default App;
