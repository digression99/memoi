import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import homeIcon from 'resources/icons/home.png';

const Wrapper = styled.div`
  width : 60px;
  height : 100%;
  flex-shrink : 0;
`;

const MenuItem = styled.div`
  height : 60px;
  & a {
    display : block;
    height : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
    text-decoration : none;

    &:visited, &:link {
      color : inherit;
    }
  }

  ${
    ({ hovereffect }) => hovereffect &&
    `&:hover {
      background : black;
      color : white;
    }`
  }

  ${({ selected }) =>
    selected ? `
      background : black;
      color : white;
    ` : ''
  }
`;

const LeftSideBar = ({ selected }) => {
  return (
    <Wrapper>
      <MenuItem selected={false} hovereffect={false}>
        <Link to="/">
          <img src={homeIcon} alt="home" />
        </Link>
      </MenuItem>
      <MenuItem selected={'link' === selected} hovereffect={true}>
        <Link to="/links">link</Link>
      </MenuItem>
      <MenuItem selected={'group' === selected} hovereffect={true}>
        <Link to="/groups">group</Link>
      </MenuItem>
    </Wrapper>
  )
};

export default LeftSideBar;