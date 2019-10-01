import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import List from './components/List';
import Note from './components/Note';

function App() {
  return (
    <div className="App">
      <Nav />
      <List />
      <Note />
    </div>
  );
}

export default App;
