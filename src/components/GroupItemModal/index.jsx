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

const Container = styled.div`
  width : 50%;
  max-height : 80%;
  background : white;
  z-index: 10002;
  overflow : scroll;
  padding : 10px;
`;

const GroupItemModal = ({ onClose, isOpen, children }) => {

  const handleBackgroundClick = e => {
    e.preventDefault();
    onClose();
  };

  const onContainerClick = e => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <Background onClick={handleBackgroundClick}>
      <Container onClick={onContainerClick}>
        {children}
      </Container>
    </Background>
    , document.body);
};

export default GroupItemModal;