// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/LandingPage';
import GroupWhatsapp from './pages/GroupWhatsApp';
import MaintenancePage from './pages/MaintenancePage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Ruta de mantenimiento*/}
        <Route path="/maintenance" element={<MaintenancePage />} />
        {/* Ruta para la página principal */}
        <Route path="/" element={<Home />} />
        {/* Ruta para la página del grupo de WhatsApp */}
        <Route path="/grupo-whatsapp" element={<GroupWhatsapp />} />
        
      </Routes>
    </Router>
  );
};

export default App;
