import React from 'react';
import styled from 'styled-components';
import Memos from 'components/Memos';
import MemoForm from 'components/MemoForm';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction : column;
  max-width : 700px;
  padding-top : 40px;
`;

function App() {
  return (
    <Wrapper>
      <MemoForm />
      <Memos />
    </Wrapper>
  );
}

export default App;
