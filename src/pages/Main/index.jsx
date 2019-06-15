import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import LeftSideBar from 'components/LeftSideBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction : row;
  height : 100%;
`;

const MainPage = () => {

  return (
    <>
      <Header />
      <Wrapper>
        <LeftSideBar />
        <div>
          This is main
        </div>
      </Wrapper>
    </>
  );
}

export default MainPage;
