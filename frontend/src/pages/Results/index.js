import React, { Component } from 'react';
import {
  FaSearch,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaList,
} from 'react-icons/fa';
// import api from '../../services/api';
import {
  Container,
  Form,
  SubmitButton,
  Logo,
  Panel,
  Title,
  Card,
} from './styles';
import ModalComponent from '../../components/Modal/Modal';
import Footer from '../../components/Footer/Footer';
import logoTjdft from '../../assets/img/tjdft.png';

export default class Results extends Component {
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
          <table>
            <tr>
              <td>
                <Card>
                  <Title>Cartório</Title>
                  <br />
                  <tr>
                    <FaMapMarkerAlt /> Endereço:
                  </tr>
                  <tr>
                    <FaPhone /> Telefone:
                  </tr>
                  <tr>
                    <FaClock /> Atendimento:
                  </tr>
                  <tr>
                    <FaList /> Serviços:
                  </tr>
                </Card>
              </td>

              <td>
                <Card>
                  <Title>Ministério Público</Title>
                  <br />
                  <tr>
                    <FaMapMarkerAlt /> Endereço:
                  </tr>
                  <tr>
                    <FaPhone /> Telefone:
                  </tr>
                  <tr>
                    <FaClock /> Atendimento:
                  </tr>
                  <tr>
                    <FaList /> Serviços:
                  </tr>
                </Card>
              </td>

              <td>
                <Card>
                  <Title>Infos</Title>
                  <br />
                  <tr>
                    <FaMapMarkerAlt /> Endereço:
                  </tr>
                  <tr>
                    <FaPhone /> Telefone:
                  </tr>
                  <tr>
                    <FaClock /> Atendimento:
                  </tr>
                  <tr>
                    <FaList /> Serviços:
                  </tr>
                </Card>
              </td>
              <br />

              <td>
                <Card>
                  <Title>Infos</Title>
                  <br />
                  <tr>
                    <FaMapMarkerAlt /> Endereço:
                  </tr>
                  <tr>
                    <FaPhone /> Telefone:
                  </tr>
                  <tr>
                    <FaClock /> Atendimento:
                  </tr>
                  <tr>
                    <FaList /> Serviços:
                  </tr>
                </Card>
              </td>

              <td>
                <Card>
                  <Title>Infos</Title>
                  <br />
                  <tr>
                    <FaMapMarkerAlt /> Endereço:
                  </tr>
                  <tr>
                    <FaPhone /> Telefone:
                  </tr>
                  <tr>
                    <FaClock /> Atendimento:
                  </tr>
                  <tr>
                    <FaList /> Serviços:
                  </tr>
                </Card>
              </td>
            </tr>
          </table>
        </Panel>

        <Footer />
      </>
    );
  }
}
