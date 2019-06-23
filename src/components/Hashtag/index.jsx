import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Chip from 'elements/Chip';

const Hashtag = styled(Link)`
  color : #f1f3f5;
  &:link, &:visited {
    text-decoration : none;
  }
`;

export default ({ tag }) => {
  return (
    <Chip>
      <Hashtag to={`/hashtag/${tag}`}>{tag}</Hashtag>
    </Chip>
  )
};