import { Routes, Route, Navigate } from 'react-router-dom';
import Home from '../pages/home';
import About from '../pages/about';
import Projects from '../pages/projects';

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
