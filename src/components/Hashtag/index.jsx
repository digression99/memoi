import React from 'react';
import styled from 'styled-components';

const Hashtag = styled.span`
  display : inline-block;
  background : rgba(0, 0, 0, 0.3);
  border-radius : 100px;
  padding : 2px 4px;
  margin : 4px 4px 4px 0;
  cursor : pointer;
`;

export default ({ tag }) => {

  const handleClickTag = (e) => {
    e.preventDefault();
    console.log('You clicked : ', tag);
  };

  return (
    <Hashtag onClick={handleClickTag}>{tag}</Hashtag>
  )
};