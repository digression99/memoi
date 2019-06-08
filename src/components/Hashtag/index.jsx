import React from 'react';
import styled from 'styled-components';

const Hashtag = styled.span`
  display : inline-block;
  background : #adb5bd;
  border-radius : 100px;
  padding : 4px 8px;
  margin : 4px 4px 4px 0;
  cursor : pointer;
  color : #f1f3f5;
  font-size : 0.8rem;
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