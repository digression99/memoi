import React from 'react';
import Memo from 'components/Memo';
import styled from 'styled-components';

const Memos = styled.div`
  display : flex;
  flex-direction : row;
  flex-flow : wrap;
  align-content: flex-start;
  padding : 4px;
`;

export default ({ memos }) => {
  // const memos = useSelector((state) => state.memos);

  return (
    <Memos>
      {memos.map(memo => <Memo key={memo.id} {...memo} />)}
    </Memos>
  )
};