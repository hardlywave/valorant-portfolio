import React from "react";
import Header from "./components/Header";
import AgentsPage from "./pages/AgentsPage";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import ScrollUpButton from "./components/ScrollUpButton";
import MapsPage from "./pages/MapsPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/agents" element={<AgentsPage />} />
        <Route path="/maps" element={<MapsPage />} />
      </Routes>
      <ScrollUpButton />
    </>
  );
};

export default App;
