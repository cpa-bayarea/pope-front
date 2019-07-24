import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
// import api from '../../services/api';
import { Container, Form, SubmitButton, Logo } from './styles';
import Modal from '../../components/Modal/Modal';
import Footer from '../../components/Footer/Footer';
import logoTjdft from '../../assets/tjdft.png';

export default class Main extends Component {
  handleSubmit = async e => {
    e.preventDefault();

    // const response = await api.get(`/search/`);

    document.location.href = '/results';
  };

  render() {
    return (
      <>
        <Modal />
        <Logo>
          <img
            width="100"
            height="100"
            src={logoTjdft}
            alt="logotjdft"
            style={{ marginLeft: 298 }}
          />
        </Logo>

        <Container>
          <h1>
            Portal de Pesquisa - Justiça Comunitária <br />
            <small>TJDFT</small>
          </h1>

          <Form onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="digite o que precisa"
              style={{ fontStyle: 'italic' }}
            />

            <SubmitButton>
              <FaSearch color="#000" size={14} />
              <b> Pesquisar na Justiça Comunitária</b>
            </SubmitButton>
          </Form>
        </Container>

        <Footer />
      </>
    );
  }
}
