import React from 'react';
import { Button } from '@material-ui/core';
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
      document.location.href = "/homeUser"
    }).catch(err => {
      console.log(err);
      alert('Credenciais incorretas!');
    });
  }

  render() {
    return (
      <div>

        <div className="row">

             <div className="col s12 m6 offset-l3 offset-m3 ">
                    <div className="card center z-depth-3">
                        <div className="card-content black-text">
                            <span className="card-title">Faça seu login <br /><br /></span>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="input-field ">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="username" type="text" class="validate" id="username" onInput={e => this._handleChange('username', e.target.value)}/>
                                  <label for="username">Nome de Usuário</label>
                                </div>
                                <div className="input-field ">
                                    <i className="material-icons prefix">lock</i>
                                    <input id="password" type="password" class="validate" id="password"
                                  type="password" onInput={e => this._handleChange('password', e.target.value)}/>
                                <label for="password">Senha</label>
                                </div>

                            <Button style={{backgroundColor: '#3f51b5'}} onClick={() => this.doLogin()}>Login</Button>
                            </form>
                        </div>
                        <label style={{ marginRight: -410}}>
                              <a href='#!'><b>Esqueceu sua senha?</b></a>
                              </label>
                              <a style={{ float: 'left' }}href="/register">Não tem cadastro? faça aqui o seu!</a>                       
                            </div>                      
                      <div className="card-action center">
                    </div>
                </div> 
          </div>
      </div>
    );
  }
}

export default Login;
