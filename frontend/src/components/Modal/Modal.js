import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import {
  FaInfoCircle,
  FaWindowClose,
  FaDownload,
  FaPhone,
  FaEnvelope,
} from 'react-icons/fa';
import Section from './styles';

export default class ModalComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  openModal() {
    this.setState({
      visible: true,
    });
  }

  closeModal() {
    this.setState({
      visible: false,
    });
  }

  render() {
    return (
      <Section>
        <h1>
          {' '}
          <FaInfoCircle
            type="button"
            value="Open"
            onClick={() => this.openModal()}
          />{' '}
          Fale Conosco
        </h1>
        <Modal
          visible={this.state.visible}
          width="320"
          height="200"
          effect="fadeInUp"
          onClickAway={() => this.closeModal()}
        >
          <div style={{ borderStyle: 'inset', borderColor: '#4682b4' }}>
            <br />

            <p style={{ textAlign: 'center' }}>
              <b>Entre em contato com a Justiça Comunitária</b>
            </p>
            <br />
            <p style={{ marginLeft: 5 }}>
              Telefones
              <FaPhone
                style={{ marginLeft: 3, marginBottom: -1, marginRight: 2 }}
              />
              : (61) 3103-7942 e 6780 (Brasília); 3103-9319 (Ceilândia)
            </p>
            <br />
            <p style={{ marginLeft: 5 }}>
              Email
              <FaEnvelope
                style={{ marginLeft: 4, marginBottom: -2, marginRight: 2 }}
              />
              : justicom@tjdft.jus.br
            </p>
            <br />

            <h1 style={{ marginLeft: 2 }}>
              {' '}
              Cartilha da Justiça Comunitária{' '}
              <Link>
                Baixar Aqui{' '}
                <FaDownload style={{ marginLeft: 3, marginBottom: -1 }} />
              </Link>{' '}
            </h1>
            <br />
            <br />
            <a onClick={() => this.closeModal()} style={{ marginLeft: 250 }}>
              Fechar{' '}
              <FaWindowClose style={{ marginLeft: 1, marginBottom: -3 }} />
            </a>
          </div>
        </Modal>
      </Section>
    );
  }
}
