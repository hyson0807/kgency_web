import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './theme/ThemeProvider';
import HomePage from './pages/HomePage';
import { ComponentsPage } from './pages/Components';
import FAQ from './pages/FAQ';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/components" element={<ComponentsPage />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App
