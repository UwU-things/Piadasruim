import React from 'react';

import Rotas from './routes';
import AuthProvider from './components/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Rotas/>
    </AuthProvider>
  );
}

export default App;
