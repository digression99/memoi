import React from 'react'
import styled from 'styled-components';
import Header from 'components/Header';
import LeftSideBar from 'components/LeftSideBar';
import Memos from 'components/Memos';
import { useSelector } from 'react-redux';

const Wrapper = styled.div`
  display: flex;
  flex-direction : row;
  height : 100%;
`;

const LinkPage = () => {
  const memos = useSelector(state => state.memos);

  return (
    <>
      <Header />
      <Wrapper>
        <LeftSideBar selected={'link'} />
        <Memos memos={memos} />
      </Wrapper>
    </>
  )
};

export default LinkPage;
