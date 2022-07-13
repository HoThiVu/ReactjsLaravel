import logo from './logo.svg';
import './App.css';
import CarList from './pages/CarList';
import AddCar from './pages/AddCar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from 'react';
import Quantity from './pages/Quantity';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      
        <Route index element={<CarList></CarList>} />
        <Route path="/quantity" element={<Quantity></Quantity>} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
