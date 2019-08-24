import React, { Component } from 'react';
import {
  FaSearch,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaList,
} from 'react-icons/fa';
// import api from '../../services/api';
import Card from 'react-bootstrap/Card';
import { Container, Form, SubmitButton, Logo, Panel, Title } from './styles';
// import ModalComponent from '../../components/Modal/Modal';
import Footer from '../../components/Footer/Footer';
import logoTjdft from '../../assets/img/tjdft.png';

export default class Results extends Component {
  state = {
    title: 'Cartório da Ceilândia',
    adress: 'QNM Alguma Coisa 04',
    tell: '(61) 3333-0000',
    attendence: '08h às 19h',
    services: 'Autenticação de Documentos',
  };

  handleSubmit = async e => {
    e.preventDefault();

    // const response = await api.get(`/results/`);
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
            style={{ marginLeft: 100 }}
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

        <Panel>
          <div>
            <Card style={{ width: '18rem' }} className="ml-2 mr-2">
              <Card.Body>
                <Title> {this.state.title} </Title>
                <br />
                <tr>
                  <FaMapMarkerAlt />
                  {this.state.adress}
                </tr>
                <tr>
                  <FaPhone />
                  {this.state.tell}
                </tr>
                <tr>
                  <FaClock />
                  {this.state.attendence}
                </tr>
                <tr>
                  <FaList />
                  {this.state.services}
                </tr>
              </Card.Body>
            </Card>
          </div>
        </Panel>
        <Footer />
      </>
    );
  }
}
