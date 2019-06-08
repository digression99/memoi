import React from 'react';
import styled from 'styled-components';
import Memos from 'components/Memos';
import MemoForm from 'components/MemoForm';
import { useSelector } from 'react-redux';
import Header from 'components/Header';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction : column;
  max-width : 700px;
  padding-top : 40px;
`;

const Main = () => {
  const memos = useSelector(state => state.memos);

  return (
    <>
      <Header />
      <Wrapper>
        <MemoForm />
        <Memos memos={memos} />
      </Wrapper>
    </>
  );
}

export default Main;
