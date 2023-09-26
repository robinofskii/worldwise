import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AppLayout from './pages/AppLayout';
import Homepage from './pages/Homepage';
import NotFound from './pages/NotFound';
import Pricing from './pages/Pricing';
import Product from './pages/Product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/" element={<Homepage />} />
        <Route path="app" element={<AppLayout />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
