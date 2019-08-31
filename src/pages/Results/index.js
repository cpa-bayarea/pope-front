import React, { Component } from 'react';
import {
  FaSearch,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaList,
  FaThumbsUp,
} from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import { Container, Form, SubmitButton, Logo, Panel, Title } from './styles';
import Footer from '../../components/Footer/Footer';
import logoTjdft from '../../assets/img/tjdft.png';
import ModalComponent from '../../components/Modal/Modal';
import Button from 'react-bootstrap/Button';

export default class Results extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     list: [
  //       {
  //         title: 'Cartório da Ceilândia',
  //         adress: 'QNM Alguma Coisa 04',
  //         tell: '(61) 3333-0000',
  //         attendence: '08h às 19h',
  //         services: 'Autenticação de Documentos',
  //       },
  //       {
  //         title: 'Cartório da Samambaia',
  //         adress: 'QNM Alguma Coisa 04',
  //         tell: '(61) 3333-0000',
  //         attendence: '08h às 19h',
  //         services: 'Autenticação de Documentos',
  //       },
  //       {
  //         title: 'Cartório do Riacho Fundo I',
  //         adress: 'QNM Alguma Coisa 04',
  //         tell: '(61) 3333-0000',
  //         attendence: '08h às 19h',
  //         services: 'Autenticação de Documentos',
  //       },
  //       {
  //         title: 'Cartório do Núcleo Bandeirante',
  //         adress: 'QNM Alguma Coisa 04',
  //         tell: '(61) 3333-0000',
  //         attendence: '08h às 19h',
  //         services: 'Autenticação de Documentos',
  //       },
  //     ],
  //   };
  // }

  state = {
    title: 'Ofício de Notas e Protesto de Títulos de Ceilândia',
    adress: 'CNM 01, BLOCO H, LOJAS 01/03',
    tell: '(61) 3371-9000',
    attendence: '09h às 18h',
    services: 'Autenticação de Documentos',
  };

  state2 = {
    title:
      'Ofício de Registro Civil, Títulos e Documentos e Pessoas Júridicas de Ceilândia',
    adress: 'QS 614 LT 1/2 CJ C',
    tell: '(61) 3458-4809',
    attendence: '09h às 18h',
    services: 'Autenticação de Documentos',
  };

  handleSubmit = async e => {
    e.preventDefault();

    // const response = await api.get(`/results/`);
  };

  render() {
    return (
      <>
        <ModalComponent />
        <Logo>
          <img
            className="responsive"
            width="100"
            height="100"
            src={logoTjdft}
            alt="logotjdft"
            style={{
              marginLeft: 100,
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
            />

            <Button type="submit" style={{ borderRadius: 38 }}>
              <FaSearch color="#fff" size={14} />
              <b> Pesquisar na Justiça Comunitária</b>
            </Button>
          </Form>
        </Container>

        <Panel>
          <div>
            <div>
              <td>
                <Card
                  style={{ width: '21rem', marginBottom: 10 }}
                  className="ml-2 mr-2"
                >
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
                    <FaThumbsUp />
                    Possui Serviços Gratuitos
                  </Card.Body>
                </Card>
                <Card style={{ width: '21rem' }} className="ml-2 mr-2">
                  <Card.Body>
                    <Title> {this.state2.title} </Title>
                    <br />
                    <tr>
                      <FaMapMarkerAlt />
                      {this.state2.adress}
                    </tr>
                    <tr>
                      <FaPhone />
                      {this.state2.tell}
                    </tr>
                    <tr>
                      <FaClock />
                      {this.state2.attendence}
                    </tr>
                    <tr>
                      <FaList />
                      {this.state2.services}
                    </tr>
                    <FaThumbsUp />
                    Possui Serviços Gratuitos
                  </Card.Body>
                </Card>
              </td>
              <td>
                <Card
                  style={{ width: '21rem', marginBottom: 10 }}
                  className="ml-2 mr-2"
                >
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
                    <FaThumbsUp />
                    Possui Serviços Gratuitos
                  </Card.Body>
                </Card>
                <Card style={{ width: '21rem' }} className="ml-2 mr-2">
                  <Card.Body>
                    <Title> {this.state2.title} </Title>
                    <br />
                    <tr>
                      <FaMapMarkerAlt />
                      {this.state2.adress}
                    </tr>
                    <tr>
                      <FaPhone />
                      {this.state2.tell}
                    </tr>
                    <tr>
                      <FaClock />
                      {this.state2.attendence}
                    </tr>
                    <tr>
                      <FaList />
                      {this.state2.services}
                    </tr>
                    <FaThumbsUp />
                    Possui Serviços Gratuitos
                  </Card.Body>
                </Card>
              </td>
              <td>
                <Card
                  style={{ width: '21rem', marginBottom: 10 }}
                  className="ml-2 mr-2"
                >
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
                    <FaThumbsUp />
                    Possui Serviços Gratuitos
                  </Card.Body>
                </Card>
                <Card style={{ width: '21rem' }} className="ml-2 mr-2">
                  <Card.Body>
                    <Title> {this.state2.title} </Title>
                    <br />
                    <tr>
                      <FaMapMarkerAlt />
                      {this.state2.adress}
                    </tr>
                    <tr>
                      <FaPhone />
                      {this.state2.tell}
                    </tr>
                    <tr>
                      <FaClock />
                      {this.state2.attendence}
                    </tr>
                    <tr>
                      <FaList />
                      {this.state2.services}
                    </tr>
                    <FaThumbsUp />
                    Possui Serviços Gratuitos
                  </Card.Body>
                </Card>
              </td>
              <td>
                <Card
                  style={{ width: '21rem', marginBottom: 10 }}
                  className="ml-2 mr-2"
                >
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
                    <FaThumbsUp />
                    Possui Serviços Gratuitos
                  </Card.Body>
                </Card>
                <Card style={{ width: '21rem' }} className="ml-2 mr-2">
                  <Card.Body>
                    <Title> {this.state2.title} </Title>
                    <br />
                    <tr>
                      <FaMapMarkerAlt />
                      {this.state2.adress}
                    </tr>
                    <tr>
                      <FaPhone />
                      {this.state2.tell}
                    </tr>
                    <tr>
                      <FaClock />
                      {this.state2.attendence}
                    </tr>
                    <tr>
                      <FaList />
                      {this.state2.services}
                    </tr>
                    <FaThumbsUp />
                    Possui Serviços Gratuitos
                  </Card.Body>
                </Card>
              </td>
            </div>
          </div>
        </Panel>
        <Footer />
      </>
    );
  }
}
