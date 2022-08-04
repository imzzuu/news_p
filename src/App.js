import React from "react";
import Header from './components/Header';
import Home from './pages/Home';
import Clip from './pages/Clip';

import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clip" element={<Clip />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;