import React from 'react';
import './App.css'
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import 'bulma/css/bulma.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Dashboard />
      </div>
    </Router>
    
  );
}

export default App;
