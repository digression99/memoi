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

const StyledSearchForm = styled(SearchForm)`
  flex : ${ ({ focused }) => focused ? 'auto' : 'initial'};
  margin-left: 10px;
`;

export default () => {
  const [ isMemoFormFocused, setIsMemoFormFocused ] = useState(false);
  const [ isSearchFormFocused, setIsSearchFormFocused ] = useState(false);

  return (
    <Header>
        <MemoForm
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

