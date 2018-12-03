import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="row">
                <div className="col s12 m6 offset-l3 offset-m3 ">
                    <div className="card center z-depth-3">
                        <div className="card-content black-text">
                            <span className="card-title">Solicite o seu cadastro <br /><br /></span>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="input-field ">
                                    <i className="material-icons prefix">account_circle</i>
                                    <input id="username" type="text" name="name" className="validate" />
                                    <label for="username">Nome de usuário</label>
                                </div>
                                <div className="input-field ">
                                    <i className="material-icons prefix">lock</i>
                                    <input id="password" type="password" name="name" className="validate" />
                                    <label for="password">Senha</label>
                                </div>

                                <div className="input-field ">
                                    <i className="material-icons prefix">lock</i>
                                    <input id="confirm_password" type="password" name="name" className="validate" />
                                    <label for="confirm_password">Confirme a Senha</label>
                                </div>
                                <input id="confirm_password" type="submit" name="name" value="Enviar" className="btn green" />
                            </form>
                        </div>
                        <div className="card-action">
                            <a className='btn blue' href="/login">Já possui cadastro? faça seu login aqui</a>
                           
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Register;