import React, { useState } from 'react';
import styled from 'styled-components';
import Hashtags from 'components/Hashtags';
import dotMenuIcon from 'resources/icons/dot-menu.png';
import { Link } from 'react-router-dom';
import MemoMenu from 'components/MemoMenu';

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

const Span = ({ text }) => <><span>{text}</span>{' '}</>
const Url = ({ text }) => <><a href={text}>{text}</a>{' '}</>
const HashtagLink = ({ tag }) => <><Link to={`/hashtag/${tag.substr(1)}`}>{tag}</Link>{' '}</>

const linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
const hashtagRegex = /(?:\s|^)#[A-Za-z0-9\-\.\_]+(?:\s|$)/;

export default ({ contents, hashtags }) => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const handleMenuButtonClick = e => {
    console.log('handleMenuButtonClick');
    setIsMenuOpen(true);
  };

  const parseContents = (contents) => {
    const splitStr = contents.split(' ');
    const componentList = [];
  
    splitStr.forEach(str => {
      if (str.match(linkRegex)) {
        componentList.push(<Url key={str + Math.random()} text={str} />);
      } else if (str.match(hashtagRegex)) {
        componentList.push(<HashtagLink key={str + Math.random()} tag={str} />)
      } else {
        componentList.push(<Span key={str + Math.random()} text={str} />);
      }
    });
  
    return componentList;
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Wrapper>
      <Left>
        <Contents>{parseContents(contents)}</Contents>
        <Hashtags hashtags={hashtags} />
      </Left>
      <Right>
        <MenuButton onClick={handleMenuButtonClick}>
          <img src={dotMenuIcon} alt="menu" />
          {isMenuOpen && <MemoMenu onClose={closeMenu} />}
        </MenuButton>
      </Right>
    </Wrapper>
  )
};