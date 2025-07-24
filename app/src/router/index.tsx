// src/router/index.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MaintenancePage from '../pages/MaintenancePage';
import GrupoWhatsApp from '../pages/GroupWhatsApp';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MaintenancePage />} />
        <Route path="/grupo-whatsapp" element={<GrupoWhatsApp />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
