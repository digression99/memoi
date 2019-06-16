import React from 'react';
import styled from 'styled-components';
import Modal from 'components/Modal';

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

  return (
    <Modal onClickBackground={handleBackgroundClick}>
      <Container onClick={onContainerClick}>
        {children}
      </Container>
    </Modal>
  )
};

export default GroupItemModal;