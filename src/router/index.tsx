// src/router/index.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import GrupoWhatsApp from '../pages/GroupWhatsApp';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/grupo-whatsapp" element={<GrupoWhatsApp />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
