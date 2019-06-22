import React, { useState } from 'react';
import styled from 'styled-components';
import MemoForm from 'components/MemoForm';
import SearchForm from 'components/SearchForm';

const Header = styled.div`
  padding : 20px 10px;
  display : flex;
  justify-content : space-between;
  width : 100%;
`;

const StyledMemoForm = styled(MemoForm)`
  transition : all .3s;
  flex : ${ ({ focused }) => focused ? 'auto' : 'initial'};
  justify-self : flex-start;
  max-width : 400px;
`;

const StyledSearchForm = styled(SearchForm)`
  flex : ${ ({ focused }) => focused ? 'auto' : 'initial'};
  margin-left: 10px;
  justify-self : flex-end;
  max-width : 400px;
  transition : all .3s;
`;

export default () => {
  const [ isMemoFormFocused, setIsMemoFormFocused ] = useState(false);
  const [ isSearchFormFocused, setIsSearchFormFocused ] = useState(false);

  return (
    <Header>
        <StyledMemoForm
          focused={isMemoFormFocused}
          onFocus={() => setIsMemoFormFocused(true)}
          onBlur={() => setIsMemoFormFocused(false)}
        />
        <StyledSearchForm
          focused={isSearchFormFocused}
          onFocus={() => setIsSearchFormFocused(true)}
          onBlur={() => setIsSearchFormFocused(false)}
        />
    </Header>
  )
};

