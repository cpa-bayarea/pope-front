import React, { Component } from 'react';

export const logout = () => {
    localStorage.removeItem('token');
  };

class NavbarUser extends Component {

    goPageHome = () => {
        logout()
        document.location.href = "/"
    }

    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper indigo">
                        <a>Portal de Pesquisas</a>

                        <a href="#" data-target="mobile-demo" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    {/* <li><a href="#">Login <i className="material-icons">person</i></a>  </li> */}
                    <li><a href="#" onClick={this.goPageHome}>Sair <i className="material-icons">arrow_back</i></a>  </li>
                    <li><a href="#">Listar Organizações <i className="material-icons">assignment</i></a>  </li>
                </ul>
            </div>

        );

    }

}


class NavbarPublic extends Component {

    goPageLogin = () => {
        document.location.href = "/login"
    }

    goPageRegister = () => {
        document.location.href = "/register"
        }
      
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper indigo">
                        <a href="#!">Portal de Pesquisas TJDFT</a>

                        <a href="#" data-target="mobile-demo" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="#" onClick={this.goPageLogin}> Login <i className="material-icons prefix">account_circle</i></a></li>
                    <li><a href="#" onClick={this.goPageRegister}>Registre-se <i className="material-icons">person_add</i></a>  </li>
                </ul>
            </div>

        );

    }

}

export { NavbarUser, NavbarPublic };