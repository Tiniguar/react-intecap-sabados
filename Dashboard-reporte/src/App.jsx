

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Settings from "./components/pages/Settings";
import Products from "./components/pages/products/Products";
import Home from "./components/pages/Home";
import Analytics from "./components/pages/Analytics";
import Shopping from './components/pages/Shopping';
import Informe from './components/pages/Informe';
import Reporte from './components/pages/Reporte';

export default function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/clientes" element={<Products />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/resultados" element={<Informe />} />
            {/**agrega una nueva ruta de para reporte */}
            <Route path="/reporte" element={<Reporte />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}
