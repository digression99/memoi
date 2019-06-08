import React from 'react';
import styled from 'styled-components';
import Hashtag from 'components/Hashtag';

const Wrapper = styled.div`
  padding : 2px;
  margin-top: auto;
`;

export default ({ hashtags }) => {

  return (
    <Wrapper>
      {hashtags.map(tag => <Hashtag key={tag + Math.random()} tag={tag} />)}
    </Wrapper>
  )
};