import React, { Component } from 'react';
import './App.css';
import MyComponent from './components/Employees';
import Employees from './components/Employees';
import Add from './components/Add';
import Edit from './components/Edit';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Add />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;
