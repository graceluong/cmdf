import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

import Add from './components/Add';
import Find from './components/Find/Find.jsx';
import SimpleMap from './components/SimpleMap.jsx';
import Header from './components/Header';


class App extends Component {
  render() {
    return (
        <div className="App">
        <Header/>
            <header className="App-header">
            </header>
            <Find />
            <body>
              something
              </body>
      </div>
    );
  }
}

export default App;
