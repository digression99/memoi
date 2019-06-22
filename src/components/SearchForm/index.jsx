import React from 'react';
import styled from 'styled-components';
import searchIcon from 'resources/icons/search.png';
import Input from 'elements/Input';

const Wrapper = styled.div`
  position : relative;
  display : flex;
  align-items: center;
  transition : all .3s;
  justify-self : flex-end;
`;

const SearchIcon = styled.img`
  position: absolute;
  right : 15px;
  height : 20px;
  cursor : pointer;
  &:hover {
    /* need to change color on hover. */
  }
`;

const SearchForm = ({ onFocus, onBlur, ...rest }) => {

  const handleSearchIconClick = e => {
    console.log("handleSearchIconClick");
  };

  return (
    <Wrapper {...rest}>
      <Input
        type="text"
        placeholder="Search"
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <SearchIcon src={searchIcon} alt="search" onClick={handleSearchIconClick} />
    </Wrapper>
  )
};

export default SearchForm;

