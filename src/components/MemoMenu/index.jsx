import React, { useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.ul`
  position : absolute;
  background : white;
  z-index: 10002;

  display : flex;
  flex-direction : column;

  padding : 0;
  margin : 0;
`;

const MenuItem = styled.li`
  list-style-type : none;
  height : 40px;
  min-width : 120px;

  display: flex;
  align-items: center;
  justify-content : center;
  padding: 4px 10px;
  
  &:hover {
    background : #e9ecef;
  }
`;

const MemoMenuModal = ({ onClose }) => {

  const handleBodyClick = e => {
    e.preventDefault();
    console.log('[MemoMenuModal.handleBodyclick]');
    onClose();
  };

  useEffect(() => {
    document.body.addEventListener('click', handleBodyClick);
    return () => {
      document.body.removeEventListener('click', handleBodyClick);
    };
  }, []);

  const handleDeleteClick = e => {
    console.log('handle delete click');
  };

  const handleEditClick = e => {
    console.log('handle edit click');
  };

  const handleAddToGroupClick = e => {
    console.log('handle add to group click');
  };
  
  return (
    <Container>
      <MenuItem onClick={handleDeleteClick}>
        <span>delete</span>
      </MenuItem>
      <MenuItem onClick={handleAddToGroupClick}>
        <span>add to group</span>
      </MenuItem>
      <MenuItem onClick={handleEditClick}>
        <span>edit</span>
      </MenuItem>
    </Container>
  )
};

export default MemoMenuModal;