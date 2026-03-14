import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import StrukturPengurus from './pages/StrukturPengurus';
import DashboardKependudukan from './pages/DashboardKependudukan';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="struktur" element={<StrukturPengurus />} />
          <Route path="dashboard" element={<DashboardKependudukan />} />
        </Route>
      </Routes>
    </Router>
  );
}
