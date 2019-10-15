/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  FaSearch,
  FaMapMarkerAlt,
  FaPhone,
  FaClock,
  FaList,
  FaThumbsUp,
} from 'react-icons/fa';
import Card from 'react-bootstrap/Card';
import Footer from '../../components/Footer/Footer';
import logoBay from '../../assets/img/logobay.png';
import ModalComponent from '../../components/Modal/Modal';
import './css.css';

export default class Results2 extends Component {
  render() {
    return (
      <>
        <ModalComponent />

        <div className="container-fluid row">
          <div className="container-fluid my-header-1 col-sm-6">
            <Image
              className="my-img"
              src={logoBay}
              style={{
                marginLeft: 136,
                maxWidth: 10000,
              }}
            />
          </div>
          <div className="container-fluid my-header-2 col-sm-6">
            <h1>
              Portal de Pesquisas
              <br />
              <small>POPE</small>
            </h1>
            <div className="rounded btn-group  col-sm-12 mt-5 p-2">
              <span className="fa fa-search mt-2" />
              <Form
                style={{
                  marginTop: -60,
                  display: 'flex',
                  flexDirection: 'row',
                }}
              >
                <input
                  type="text"
                  placeholder="digite o que precisa"
                  style={{
                    fontStyle: 'italic',
                    borderRadius: 38,
                    marginTop: 30,
                  }}
                />
                <Button
                  type="submit"
                  style={{ borderRadius: 40, marginTop: 30 }}
                >
                  <FaSearch color="#fff" size={14} />
                  <b> Pesquisar na comunidade</b>
                </Button>
              </Form>
            </div>
          </div>
        </div>
        <div className="container p-1 my-body">
          <div className="row">
            <Card className="my-box-1  col-sm-6 col-md-6 col-lg-3">
              <Card.Body>
                <h2> Título </h2>
                <br />
                <tr>
                  <FaMapMarkerAlt />
                  Endereço:
                </tr>
                <tr>
                  <FaPhone />
                  Telefones:
                </tr>
                <tr>
                  <FaClock />
                  Horário de Funcionamento:
                </tr>
                <tr>
                  <FaList />
                  Serviços:
                </tr>
                <FaThumbsUp />
                Possui Serviços Gratuitos
              </Card.Body>
            </Card>
            <Card className="my-box-1  col-sm-6 col-md-6 col-lg-3">
              <Card.Body>
                <h2> Título </h2>
                <br />
                <tr>
                  <FaMapMarkerAlt />
                  Endereço:
                </tr>
                <tr>
                  <FaPhone />
                  Telefones:
                </tr>
                <tr>
                  <FaClock />
                  Horário de Funcionamento:
                </tr>
                <tr>
                  <FaList />
                  Serviços:
                </tr>
                <FaThumbsUp />
                Possui Serviços Gratuitos
              </Card.Body>
            </Card>
            <Card className="my-box-1  col-sm-6 col-md-6 col-lg-3">
              <Card.Body>
                <h2> Título </h2>
                <br />
                <tr>
                  <FaMapMarkerAlt />
                  Endereço:
                </tr>
                <tr>
                  <FaPhone />
                  Telefones:
                </tr>
                <tr>
                  <FaClock />
                  Horário de Funcionamento:
                </tr>
                <tr>
                  <FaList />
                  Serviços:
                </tr>
                <FaThumbsUp />
                Possui Serviços Gratuitos
              </Card.Body>
            </Card>
            <Card className="my-box-1  col-sm-6 col-md-6 col-lg-3">
              <Card.Body>
                <h2> Título </h2>
                <br />
                <tr>
                  <FaMapMarkerAlt />
                  Endereço:
                </tr>
                <tr>
                  <FaPhone />
                  Telefones:
                </tr>
                <tr>
                  <FaClock />
                  Horário de Funcionamento:
                </tr>
                <tr>
                  <FaList />
                  Serviços:
                </tr>
                <FaThumbsUp />
                Possui Serviços Gratuitos
              </Card.Body>
            </Card>
            <Card className="my-box-1  col-sm-6 col-md-6 col-lg-3">
              <Card.Body>
                <h2> Título </h2>
                <br />
                <tr>
                  <FaMapMarkerAlt />
                  Endereço:
                </tr>
                <tr>
                  <FaPhone />
                  Telefones:
                </tr>
                <tr>
                  <FaClock />
                  Horário de Funcionamento:
                </tr>
                <tr>
                  <FaList />
                  Serviços:
                </tr>
                <FaThumbsUp />
                Possui Serviços Gratuitos
              </Card.Body>
            </Card>
            <Card className="my-box-1  col-sm-6 col-md-6 col-lg-3">
              <Card.Body>
                <h2> Título </h2>
                <br />
                <tr>
                  <FaMapMarkerAlt />
                  Endereço:
                </tr>
                <tr>
                  <FaPhone />
                  Telefones:
                </tr>
                <tr>
                  <FaClock />
                  Horário de Funcionamento:
                </tr>
                <tr>
                  <FaList />
                  Serviços:
                </tr>
                <FaThumbsUp />
                Possui Serviços Gratuitos
              </Card.Body>
            </Card>
            <Card className="my-box-1  col-sm-6 col-md-6 col-lg-3">
              <Card.Body>
                <h2> Título </h2>
                <br />
                <tr>
                  <FaMapMarkerAlt />
                  Endereço:
                </tr>
                <tr>
                  <FaPhone />
                  Telefones:
                </tr>
                <tr>
                  <FaClock />
                  Horário de Funcionamento:
                </tr>
                <tr>
                  <FaList />
                  Serviços:
                </tr>
                <FaThumbsUp />
                Possui Serviços Gratuitos
              </Card.Body>
            </Card>
            <Card className="my-box-1  col-sm-6 col-md-6 col-lg-3">
              <Card.Body>
                <h2> Título </h2>
                <br />
                <tr>
                  <FaMapMarkerAlt />
                  Endereço:
                </tr>
                <tr>
                  <FaPhone />
                  Telefones:
                </tr>
                <tr>
                  <FaClock />
                  Horário de Funcionamento:
                </tr>
                <tr>
                  <FaList />
                  Serviços:
                </tr>
                <FaThumbsUp />
                Possui Serviços Gratuitos
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="container-fluid " />

        <Footer />
      </>
    );
  }
}
