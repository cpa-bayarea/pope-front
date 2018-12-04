import React, {Component} from 'react';

import logo from '../imgs/logobay.png';

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer indigo" style={{bottom: 0}}>
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">Portal de Pesquisas</h5>
                <p className="grey-text text-lighten-4 center">
                  Uma plataforma para buscar serviços Sociais e Jurídicos em
                  Brasília
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li>
                    <a
                      className="grey-text text-lighten-3"
                      target="_blank"
                      href="http://www.tjdft.jus.br/">
                      TJDFT
                    </a>
                  </li>
                  <li>
                    <a
                      className="grey-text text-lighten-3"
                      target="_blank"
                      href="https://github.com/cpa-bayarea/pope/wiki">
                      Código Fonte
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <a
              className="grey-text text-lighten-4 right"
              href="http://bayareacpa.com.br">
              © 2018 - 2018 Desenvolvido por Bay Area{' '}
            </a>{' '}
            <img width="60" heigth="60" src={logo} />
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
