import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import logo from './imgs/logo.png'
import './App.css';
import Routes from './routes/Routes';
import { NavbarPublic, NavbarUser } from './components/navbar';
import Footer from './components/footer';
import './icons.css';
import Search from './components/Search'

export const isAuthenticated = () => localStorage.getItem('token') !== null;

const Auth = ({ component: Component, ...rest }) => (
    
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <NavbarUser {...props} />
        ) : (
          <NavbarPublic />
        )
      }
    />
);

class App extends Component {
  render() {
    return (
      
      <Router>
        
        <div>   

          <Auth />       
             <div className="center">
                <img style={{ marginTop: 20, width: 100, height: 120 }} src={logo} />
              </div> 
          
          <Routes />
          
          {/* <div>
            <Search />
          </div>  */}
          
          <div>
            <Footer />
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
