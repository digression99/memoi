import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Memos from 'components/Memos';
import Header from 'components/Header';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction : column;
  max-width : 700px;
  padding-top : 40px;
`;

export default ({ tag }) => {
  const memos = useSelector((state) => state.memos.filter(memo => memo.hashtags.includes(tag)));

  return (
    <>
      <Header />
      <Wrapper>
        <Memos memos={memos} />
      </Wrapper>
    </>
  )
};