import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hashtag = styled(Link)`
  display : inline-block;
  background : #adb5bd;
  border-radius : 100px;
  padding : 4px 8px;
  margin : 4px 4px 4px 0;
  color : #f1f3f5;
  font-size : 0.8rem;

  &:link, &:visited {
    text-decoration : none;
  }
`;

export default ({ tag }) => {

  return (
    <Hashtag to={`/hashtag/${tag}`}>{tag}</Hashtag>
  )
};