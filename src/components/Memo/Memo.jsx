import React from 'react';
import styled from 'styled-components';
import Hashtags from 'components/Hashtags';
import dotMenuIcon from 'resources/icons/dot-menu.png';
import MemoMenu from 'components/MemoMenu';
import { parseContents } from 'lib';

const Wrapper = styled.div`
  display : flex;
  flex-direction: row;
  border-radius : 10px;
  border : 1px solid rgba(0, 0, 0, 0.2);
  padding : 10px 5px;
  max-width : 300px;
  max-height : 200px;
  margin : 4px;
`;

const Left = styled.div`
  display : flex;
  flex-direction : column;
  max-width : 200px;
`;

const Contents = styled.div`
  word-wrap : break-word;
  margin: 10px 0 10px 0;
  font-size : 0.8rem;
`;

const Right = styled.div`
  margin-left : 10px;
`;

const MenuButton = styled.button`
  position: relative;
  outline: none;
  border: none;
  background: none;
  width: 28px;
  cursor: pointer;
  & > img {
    width: 100%;
  }
`;

export default ({ isMenuOpen, onMenuButtonClick, onCloseMenu, contents, hashtags }) => {

  return (
    <Wrapper>
      <Left>
        <Contents>{parseContents(contents)}</Contents>
        <Hashtags hashtags={hashtags} />
      </Left>
      <Right>
        <MenuButton onClick={onMenuButtonClick}>
          <img src={dotMenuIcon} alt="menu" />
        </MenuButton>
        {isMenuOpen && <MemoMenu onClose={onCloseMenu} />}
      </Right>
    </Wrapper>
  )
};