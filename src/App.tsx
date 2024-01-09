// App.tsx
import React from 'react';
import Accueil from './components/Acceuil';
import Cartes from './components/Cartes';

const App: React.FC = () => {
  return (
    <div>
      <div>
        <Accueil />
        <Cartes />
      </div>
    </div>
  );
};

export default App;
