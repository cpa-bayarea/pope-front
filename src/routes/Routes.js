import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import homeUser from '../components/users/homeUser';
import Login from '../components/users/Login';
import Register from '../components/users/Register'

export const isAuthenticated = () => localStorage.getItem('token') !== null;

class Routes extends React.Component {

  isAuthenticated = (component) => {
    let token = window.localStorage.getItem('token')
    if (token===undefined || token===null) {
      return (
        Login
      )
    }
    return(
      component
    )
  }

  render() {
    return (
      <Switch>
        <Route exact path='/'/>
        <Route path='/login' component={Login} />
        <Route path='/homeUser' component={this.isAuthenticated(homeUser)} />
        <Route path='/register' component={Register} />
      </Switch>
    );
  }
}

export default Routes;