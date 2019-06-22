import React from 'react';
import styled from 'styled-components';
import addIcon from 'resources/icons/plus.png';
import addIconInverted from 'resources/icons/plus_inverted.png';

const AddButton = styled.button`
  width : 80px;
  height : 80px;
  background : none;
  border : none;
  outline : none;
  cursor : pointer;
  transition : all .5s;
  background : url(${addIcon});
  background-size : cover;

  &:hover {
    background : url(${addIconInverted});
    background-size : cover;
  }

  &:active {
    background : url(${addIcon});
    background-size : cover;
  }
`;

AddButton.Img = styled.img`
  width : 100%;
`;

export default ({ onClick, ...rest }) => {

  return (
    <AddButton onClick={onClick} {...rest} >
    </AddButton>
  )
};
