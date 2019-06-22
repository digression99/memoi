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

const GroupFormModal = ({ onClose, children }) => {

  return (
    <Modal onClickBackground={() => onClose()}>
      <Container onClick={e => e.stopPropagation()}>
        {children}
      </Container>
    </Modal>
  )
};

export default GroupFormModal;