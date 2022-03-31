import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Register from './pages/register/Register';
import LandingPage from './pages/landingPage/LandingPage';
import './app.css';
const App = () => {
  return (
    <Routes>
    <Route path="/*" element={<LandingPage />} />
    <Route path="/auth" element={<Register />} />
    </Routes>
  )
}

export default App
