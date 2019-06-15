import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import homeIcon from 'resources/icons/home.png';
import MemoForm from 'components/MemoForm';
import SearchForm from 'components/SearchForm';

const Wrapper = styled.div`
  padding : 20px 10px;
  display : flex;
  justify-content : space-between;
  width : 100%;
`;

const Left = styled.div`
  width : 200px;
  display : flex;
  align-items: center;
  & > *:not(:first-child) {
    margin-left : 10px;
  }
  transition : all .3s;
  flex : ${ ({ focused }) => focused ? 'auto' : 'initial'};
`;

const StyledSearchForm = styled(SearchForm)`
  flex : ${ ({ focused }) => focused ? 'auto' : 'initial'};
  margin-left: 10px;
`;

export default () => {
  const [ isMemoFormFocused, setIsMemoFormFocused ] = useState(false);
  const [ isSearchFormFocused, setIsSearchFormFocused ] = useState(false);

  const handleMemoFormFocus = () => {
    setIsMemoFormFocused(true);
  };

  const handleMemoFormBlur = () => {
    setIsMemoFormFocused(false);
  };

  const handleSearchFormFocus = () => {
    setIsSearchFormFocused(true);
  };

  const handleSearchFormBlur = () => {
    setIsSearchFormFocused(false);
  };
  
  return (
    <Wrapper>
      <Left focused={isMemoFormFocused}>
        <Link to="/">
          <img src={homeIcon} alt="home" />
        </Link>
        <MemoForm
          focused={isMemoFormFocused}
          onFocus={handleMemoFormFocus}
          onBlur={handleMemoFormBlur}
        />
      </Left>
      <StyledSearchForm focused={isSearchFormFocused} onFocus={handleSearchFormFocus} onBlur={handleSearchFormBlur} />
    </Wrapper>
  )
};

