import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Main from './layout/main/Main';

const App = ({ children }) => <Main key="main">{children}</Main>;

export default App;