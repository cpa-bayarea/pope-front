import React, { Component } from 'react';
import { FaSearch } from 'react-icons/fa';
// import api from '../../services/api';
import Button from 'react-bootstrap/Button';
import { Container, Form, SubmitButton, Logo } from './styles';
import Modal from '../../components/Modal/Modal';
import Footer from '../../components/Footer/Footer';
import logoTjdft from '../../assets/img/tjdft.png';

export default class Main extends Component {
  state = {
    search: '',
  };

  handleInputChange = e => {
    this.setState({ search: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();
    // console.log(this.state.search);

    // const response = await api.get(`/search/`);

    // const data = {
    //   name: response.data.name,
    //   tell: response.data.tell,
    //   adress: response.data.adress,
    //   city: response.data.city,
    //   attendance: response.data.attendance,
    // };

    // Por enquanto
    document.location.href = '/results';
  };

  render() {
    const { search } = this.state;

    return (
      <>
        <Modal />
        <Logo>
          <img
            className="responsive"
            width="100"
            height="100"
            src={logoTjdft}
            alt="logotjdft"
            style={{
              marginLeft: 298,
              justifyContent: 'center',
              alignItems: 'center',
            }}
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
              value={search}
              onChange={this.handleInputChange}
            />

            <Button type="submit" style={{ borderRadius: 38 }}>
              <FaSearch color="#fff" size={14} />
              <b> Pesquisar na Justiça Comunitária</b>
            </Button>
          </Form>
        </Container>

        <Footer />
      </>
    );
  }
}