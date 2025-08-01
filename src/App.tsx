import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeProvider';
import HomePage from './pages/HomePage';
import { ComponentsPage } from './pages/Components';
import FAQ from './pages/FAQ';
import AccountDeletion from './pages/AccountDeletion';
import PrivacyPolicy from './pages/PrivacyPolicy';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/account-deletion" element={<AccountDeletion />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
