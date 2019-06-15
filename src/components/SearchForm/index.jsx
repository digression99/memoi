import React from 'react';
import styled from 'styled-components';
import searchIcon from 'resources/icons/search.png';

const SearchInput = styled.input`
  width : 100%;
  height : 2.6rem;
  border : none;
  outline : none;

  border-radius : 10px;
  font-size : 1.2rem;
  box-shadow : 0 0 5px 3px rgba(0, 0, 0, 0.3);
  background : #e9ecef;
  padding : 6px 0 6px 10px;

  &:focus {
    background : white;
  }
`;

const Wrapper = styled.div`
  position : relative;
  display : flex;
  align-items: center;
  transition : all .3s;
`;

const SearchIcon = styled.img`
  position: absolute;
  right : 10px;
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
    <Wrapper
      {...rest}
    >
      <SearchInput
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

