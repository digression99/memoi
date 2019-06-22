import React from 'react';
import Header from 'components/Header';
import LeftSideBar from 'components/LeftSideBar';
import Page from 'elements/Page';

const MainPage = () => {

  return (
    <Page.OuterWrapper>
      <LeftSideBar />
      <Page.Wrapper>
        <Header />
        <div>
          This is main
        </div>
      </Page.Wrapper>
    </Page.OuterWrapper>
  );
}

export default MainPage;
