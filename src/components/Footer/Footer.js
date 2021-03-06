import React from 'react';
import { FaGithub } from 'react-icons/fa';
import FooterComponent from './styles';

export default function Footer() {
  return (
    <>
      <FooterComponent className="container-fluid">
        <p>
          <b>Portal de Pesquisas POPE</b>
          <b style={{ float: 'right' }}>
            {' '}
            © 2018 - 2019 Distribuído por Centro de Práticas Acadêmicas - Bay
            Area. Desenvolvido por José Kimura, Lucas Manoel e Thiago Lago{' '}
            <FaGithub />
          </b>
        </p>
      </FooterComponent>
    </>
  );
}
