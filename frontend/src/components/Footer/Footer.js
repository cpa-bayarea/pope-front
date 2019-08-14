import React from 'react';
import { FaGithub } from 'react-icons/fa';
import FooterComponent from './styles';

export default function Footer() {
  return (
    <>
      <FooterComponent>
        <p>
          <b>Tribunal de Justiça do Distrito Federal e Territórios</b>
          <b style={{ float: 'right' }}>
            {' '}
            © 2018 - 2019 Desenvolvido por Centro de Práticas Acadêmicas - Bay
            Area <FaGithub />
          </b>
        </p>
      </FooterComponent>
    </>
  );
}
