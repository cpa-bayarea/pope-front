import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaSearch />
        Portal de Pesquisa - Justiça Comunitária <br />
        <small>TJDFT</small>
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Pesquisar" />

        <SubmitButton>
          <FaSearch color="#000" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}
