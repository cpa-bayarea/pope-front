import React from 'react';
import { Input, FormControl, InputLabel, Button } from '@material-ui/core';
import UsersApi from './UsersApi';
import './Login.css';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange(field, val) {
    this.setState({ ...this.state, [field]: val });
  }

  doLogin() {
    UsersApi.login(this.state).then(res => {
      const { token } = res.data;
      localStorage.setItem('token', token);
    }).catch(err => {
      console.log(err);
      alert('Credenciais incorretas!');
    });
  }

  render() {
    return (
      <div className="Login">
        <FormControl fullWidth>
          <InputLabel htmlFor="username">Usuário</InputLabel>
          <Input
            id="username"
            onInput={e => this._handleChange('username', e.target.value)}
          />
        </FormControl>
        <br/>

        <FormControl fullWidth>
          <InputLabel htmlFor="password">Senha</InputLabel>
          <Input
            id="password"
            type="password"
            onInput={e => this._handleChange('password', e.target.value)}
          />
        </FormControl>
        <br/>

        <Button fullWidth onClick={() => this.doLogin()}>Login</Button>
      </div>
    );
  }
}

export default Login;
