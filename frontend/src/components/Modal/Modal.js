import React from 'react';
import { FaInfo } from 'react-icons/fa';
import ModalComponent from './styles';

export default function Modal() {
  return (
    <>
      <ModalComponent>
        <p>
          {' '}
          <FaInfo /> Saiba Mais
        </p>
      </ModalComponent>
    </>
  );
}
