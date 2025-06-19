// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Weather from './components/Weather';
import Getweather from './components/Getweather';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/getweather" />} />
        <Route path="/getweather" element={<Getweather/>} />
        <Route path="/weather" element={<Weather/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
