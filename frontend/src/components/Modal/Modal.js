import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import { Link } from 'react-router-dom';
import { FaInfoCircle, FaDownload, FaPhone, FaEnvelope } from 'react-icons/fa';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Entre em contato com a Justiça Comunitária
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          Telefones{' '}
          <FaPhone
            style={{
              marginLeft: 3,
              marginBottom: -1,
              marginRight: 2,
              marginTop: -6,
            }}
          />
          : (61) 3103-7942 e 6780 (Brasília); 3103-9319 (Ceilândia)
        </p>
        <p style={{ marginLeft: 5, marginTop: -7 }}>
          Email
          <FaEnvelope
            style={{
              marginLeft: 4,
              marginBottom: -2,
              marginRight: 2,
              marginTop: -4,
            }}
          />
          : justicom@tjdft.jus.br
        </p>
        <h1 style={{ marginLeft: 2 }}>
          {' '}
          Cartilha da Justiça Comunitária -{' '}
          <Link>
            Baixar Aqui{' '}
            <FaDownload
              style={{ marginLeft: 3, marginBottom: -1, marginTop: -6 }}
            />
          </Link>{' '}
        </h1>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalComponent() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <ButtonToolbar>
      <Button
        variant="primary"
        onClick={() => setModalShow(true)}
        style={{
          marginLeft: 'auto',
          borderRadius: 38,
          background: '#4682b4',
          color: '#000',
        }}
      >
        <FaInfoCircle /> Saiba Mais
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </ButtonToolbar>
  );
}

export default ModalComponent;
