import React from 'react';
import styled from 'styled-components';
import Hashtags from 'components/Hashtags';

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
`;

const Span = ({ text }) => <span>{text}</span>;
const Link = ({ text }) => <a href={text}>{text}</a>

export default ({ contents, hashtags }) => {

  const parseUrl = (contents) => {
    const splitStr = contents.split(' ');
    const componentList = [];
    const regex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
  
    splitStr.forEach(str => {
      if (str.match(regex)) {
        componentList.push(<><Link key={str} text={str} />{' '}</>);
        return;
      }
      componentList.push(<><Span text={str} />{' '}</>);
    });
  
    return componentList;
  };

  return (
    <Wrapper>
      <Contents>{parseUrl(contents)}</Contents>
      <Hashtags hashtags={hashtags} />
    </Wrapper>
  )
};