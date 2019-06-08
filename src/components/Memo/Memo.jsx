import React from 'react';
import styled from 'styled-components';
import Hashtags from 'components/Hashtags';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display : flex;
  flex-direction : column;

  border-radius : 10px;
  border : 1px solid rgba(0, 0, 0, 0.2);
  padding : 0.6rem 1rem;
  width : 300px;
  margin : 4px;
`;

const Contents = styled.div`
  word-wrap : break-word;
  margin: 10px 0 10px 0;
  font-size : 0.8rem;
`;

const Span = ({ text }) => <><span>{text}</span>{' '}</>
const Url = ({ text }) => <><a href={text}>{text}</a>{' '}</>
const HashtagLink = ({ tag }) => <><Link to={`/hashtag/${tag.substr(1)}`}>{tag}</Link>{' '}</>

const linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
const hashtagRegex = /(?:\s|^)#[A-Za-z0-9\-\.\_]+(?:\s|$)/;

export default ({ contents, hashtags }) => {

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

  return (
    <Wrapper>
      <Contents>{parseContents(contents)}</Contents>
      <Hashtags hashtags={hashtags} />
    </Wrapper>
  )
};