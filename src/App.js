import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';

import './App.css';
import Routes from './routes/Routes';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppBar position="static">
            <Toolbar className="Toolbar">
              <Typography variant="title" color="textPrimary">
                Portal de Pesquisa do TJDFT
              </Typography>
              <Link to="/login" className="LoginBtn">
                <Button color="inherit">
                  Login
                </Button>
              </Link>
            </Toolbar>
          </AppBar>

          <div className="Content">
            <Routes />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
