import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BudlesPage from './pages/BundlesPage';
import Synchro from './pages/SynchroBundlePage';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<BudlesPage />} />
          <Route path="/Synchro" element={<Synchro />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;