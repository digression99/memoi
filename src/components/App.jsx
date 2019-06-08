import React from 'react';
import styled from 'styled-components';
import data from 'data';
import Memos from 'components/Memos';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {

  return (
    <Wrapper>
      <Memos memos={data.memos} />
    </Wrapper>
  );
}

export default App;
