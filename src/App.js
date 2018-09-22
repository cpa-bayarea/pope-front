import React, { Component } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  AppBar,
  Typography,
  Toolbar
} from '@material-ui/core';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="textPrimary">Portal de Pesquisa do TJDFT</Typography>
          </Toolbar>
        </AppBar>

        <div className="SearchDiv">
          <FormControl>
            <InputLabel htmlFor="search">Procurar</InputLabel>
            <Input id="search" />
          </FormControl>
        </div>
      </div>
    );
  }
}

export default App;
