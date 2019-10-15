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
          Entre em contato
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
          : (61) 0000-0000 e 0000 (Brasília); 0000-0000 (Ceilândia)
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
          : email@email.com.br
        </p>
        <h3 style={{ marginLeft: 2 }}>
          {' '}
          Cartilha -{' '}
          <Link>
            Baixar Aqui{' '}
            <FaDownload
              style={{ marginLeft: 3, marginBottom: -1, marginTop: -6 }}
            />
          </Link>{' '}
        </h3>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} style={{ borderRadius: 38 }}>
          Fechar
        </Button>
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
