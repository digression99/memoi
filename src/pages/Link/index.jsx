import React from 'react'
import Header from 'components/Header';
import LeftSideBar from 'components/LeftSideBar';
import Memos from 'components/Memos';
import { useSelector } from 'react-redux';
import Page from 'elements/Page';

const LinkPage = () => {
  const memos = useSelector(state => state.memos);

  return (
    <Page.OuterWrapper>
      <LeftSideBar selected={'link'} />
      <Page.Wrapper>
        <Header />
        <Memos memos={memos} />
      </Page.Wrapper>
    </Page.OuterWrapper>
  )
};

export default LinkPage;
