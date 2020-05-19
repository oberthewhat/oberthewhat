import React from 'react';
import './App.css';
import Router from './router'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
  return (
    <BrowserRouter>
        <Nav />
        <Router />
    </BrowserRouter>
  );
}

export default App;
