import React, {Component} from 'react';

import UsersApi from './UsersApi';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
      confirm_password: '',
    };

    this._handleChange = this._handleChange.bind(this);
    this._handleRegister = this._handleRegister.bind(this);
  }

  _handleChange(evt, key) {
    this.setState(...this.state, {[key]: evt.target.value});
  }

  _handleRegister() {
    const {password, confirm_password} = this.state;
    if (password !== confirm_password) {
      alert('As senhas devem ser iguais!');
      return;
    }
    UsersApi.register(this.state)
      .then(res => {
        alert('ok');
      })
      .catch(err => {
        alert('Error: ', err.response.toString());
      });
  }

  render() {
    return (
      <div className="row">
        <div className="col s12 m6 offset-l3 offset-m3 ">
          <div className="card center z-depth-3">
            <div className="card-content black-text">
              <span className="card-title">
                Solicite o seu cadastro <br />
                <br />
              </span>
            </div>
            <div className="card-body">
              <form onSubmit={this._handleRegister} action="">
                <div className="input-field ">
                  <i className="material-icons prefix">account_circle</i>
                  <input
                    id="username"
                    type="text"
                    name="name"
                    className="validate"
                    value={this.state.username}
                    onChange={evt => this._handleChange(evt, 'username')}
                  />
                  <label htmlFor="username">Nome de usuário</label>
                </div>
                <div className="input-field ">
                  <i className="material-icons prefix">lock</i>
                  <input
                    id="password"
                    type="password"
                    name="name"
                    className="validate"
                    value={this.state.password}
                    onChange={evt => this._handleChange(evt, 'password')}
                  />
                  <label htmlFor="password">Senha</label>
                </div>

                <div className="input-field ">
                  <i className="material-icons prefix">lock</i>
                  <input
                    id="confirm_password"
                    type="password"
                    name="name"
                    className="validate"
                    value={this.state.confirm_password}
                    onChange={evt =>
                      this._handleChange(evt, 'confirm_password')
                    }
                  />
                  <label htmlFor="confirm_password">Confirme a Senha</label>
                </div>
                <button
                  name="name"
                  className="btn green"
                  onClick={this._handleRegister}
                  type="button"
                >
                  Enviar
                </button>
              </form>
            </div>
            <div className="card-action">
              <a className="btn blue" href="/login">
                Já possui cadastro? faça seu login
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
