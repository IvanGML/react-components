import React from 'react';

import Navigation from './layout/navigation/Navigation';
import Main from './layout/main/Main';

const App = ({ children }) => [
  <Navigation key="navigation" />,
  <Main key="main">
    {children}
  </Main>,
];

export default App;