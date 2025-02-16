import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
// import Page404 from '../pages/NotFound';

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="*" element={<Page404 url="/" />} /> */}
    </Routes>
  );
}
