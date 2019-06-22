import React from 'react';
import { useSelector } from 'react-redux';
import Memos from 'components/Memos';
import Header from 'components/Header';
import LeftSideBar from 'components/LeftSideBar';
import Page from 'elements/Page';

export default ({ tag }) => {
  const memos = useSelector((state) => state.memos.filter(memo => memo.hashtags.includes(tag)));

  return (
    <Page.OuterWrapper>
      <LeftSideBar />
      <Page.Wrapper>
        <Header />
        <Memos memos={memos} />
      </Page.Wrapper>
    </Page.OuterWrapper>
  )
};