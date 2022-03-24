import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';

import Content from './components/Content/Content';
import Header from './components/Header/Header';

import store from './store/store'

import './App.css'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className='content-wrapper'>
          <Header/>
          <Content/>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
