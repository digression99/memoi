import React from 'react';
import Memo from 'components/Memo';
import styled from 'styled-components';

const Memos = styled.div`
  display : flex;
  flex-direction : row;
  flex-flow : wrap;
  justify-content : space-around;
  padding : 4px;
`;

export default ({ memos }) => {

  return (
    <Memos>
      {memos.map(memo => <Memo key={memo.id} {...memo} />)}
    </Memos>
  )
};