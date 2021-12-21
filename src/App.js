import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'

import Content from './components/Content/Content';
import Header from './components/Header/Header';

import './App.css'

const App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Content/>
      </Router>
    </div>
  );
}

export default App;
