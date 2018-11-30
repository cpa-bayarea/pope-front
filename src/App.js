import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

import './App.css';
import Routes from './routes/Routes';
import Navbar from './components/navbar';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
      </Router>
    );
  }
}

export default App;
