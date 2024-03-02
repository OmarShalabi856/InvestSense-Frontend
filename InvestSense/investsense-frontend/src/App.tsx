import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './Components/Search';
import CardList from './Components/CardList';

function App() {
  return (
    <div className="App">
    <Search/>
    <CardList/>
    </div>
  );
}

export default App;
