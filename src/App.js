import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import logo from './imgs/logo.png'
import './App.css';
import Routes from './routes/Routes';
import { NavbarPublic } from './components/navbar';
import Footer from './components/footer';
import './icons.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavbarPublic />
          <div className="center">
            <img style={{ marginTop: 20, width: 100, height: 100 }} src={logo} />
          </div>

          <Routes />

          <div>
            <Footer />  
          </div>
          
        </div>
      </Router>
    );
  }
}

export default App;
