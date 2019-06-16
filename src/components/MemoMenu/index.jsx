import React, { useRef, useEffect } from 'react';
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
  const containerRef = useRef(null);

  const handleBodyClick = e => {
    e.preventDefault();
    console.log('[MemoMenuModal.handleBodyclick]');
    const node = containerRef.current;

    if (node.contains(e.target)) {
      return;
    } 
    onClose();
  };

  useEffect(() => {
    document.querySelector('#root').addEventListener('click', handleBodyClick);
    return () => {
      document.querySelector('#root').removeEventListener('click', handleBodyClick);
    };
  }, []);

  const handleMenuClick = cb => e => {
    e.preventDefault();
    cb();
    onClose();
  };

  const handleDeleteClick = handleMenuClick(() => {
    console.log('handle delete click');
  });

  const handleEditClick = handleMenuClick(() => {
    console.log('handle edit click');
  });

  const handleAddToGroupClick = handleMenuClick(() => {
    console.log('handle add to group click');
  });
  
  return (
    <Container ref={containerRef}>
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