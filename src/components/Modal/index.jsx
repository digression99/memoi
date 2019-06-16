import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 10001;

  display : flex;
  justify-content : center;
  align-items : center;
`;

const Modal = ({ onClickBackground, children }) => {

  return ReactDOM.createPortal(
    <Background onClick={onClickBackground}>
      {children}
    </Background>,
    document.body
  );
};

export default Modal;