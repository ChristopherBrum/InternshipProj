import React from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Main from './components/Main/Main.js';

function App() {

  return (
    <div className="App">
      <Navigation />
      <div className="spacer"></div>
      <Main />
    </div>
  );
}

export default App;
