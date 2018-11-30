import React, { Component } from 'react';



class NavbarUser extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper indigo">
                        <a href="#!">Portal de Pesquisas</a>

                        <a href="#" data-target="mobile-demo" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="#">Login <i className="material-icons">person</i></a>  </li>
                    <li><a href="#">Sair <i className="material-icons">person</i></a>  </li>
                    <li><a href="#">Listar Organizações <i className="material-icons">eye</i></a>  </li>
                </ul>
            </div>

        );

    }

}
class NavbarPublic extends Component {
    render() {
        return (
            <div>
                <nav>
                    <div className="nav-wrapper indigo">
                        <a href="#!">Portal de Pesquisas</a>

                        <a href="#" data-target="mobile-demo" className="sidenav-trigger show-on-large"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                        </ul>
                    </div>
                </nav>

                <ul className="sidenav" id="mobile-demo">
                    <li><a href="#">Login <i className="material-icons">person</i></a>  </li>
                    <li><a href="#">Registre-se <i className="material-icons">person_add</i></a>  </li>
                </ul>
            </div>

        );

    }

}

export { NavbarUser, NavbarPublic };