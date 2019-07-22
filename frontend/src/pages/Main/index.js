import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
import api from '../../services/api';
import { Container, Form, SubmitButton, Logo, Footer } from './styles';
import logoTjdft from '../../assets/tjdft.png';

export default class Main extends Component {
  handleSubmit = async e => {
    e.preventDefault();

    const response = await api.get(`/search/`);
  };

  render() {
    return (
      <>
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
            <input type="text" placeholder="Pesquisar" />

            <SubmitButton>
              <FaSearch color="#000" size={14} />
              Pesquisar na Justiça Comunitária
            </SubmitButton>
          </Form>
        </Container>

        <Footer />
      </>
    );
  }
}
