import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import LeftSideBar from 'components/LeftSideBar';

const Wrapper = styled.div`
  display: flex;
  flex-direction : row;
  height : 100%;
`;

export default () => {
  return (
    <>
      <Header />
      <Wrapper>
        <LeftSideBar selected={'group'} />
        <div>
          This is group page
        </div>
      </Wrapper>
    </>
  )
};

