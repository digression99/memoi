import React from 'react';
import { Link } from 'react-router-dom';

const Span = ({ text }) => <><span>{text}</span>{' '}</>
const Url = ({ text }) => <><a href={text}>{text}</a>{' '}</>
const HashtagLink = ({ tag }) => <><Link to={`/hashtag/${tag.substr(1)}`}>{tag}</Link>{' '}</>

const linkRegex = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;
const hashtagRegex = /(?:\s|^)#[A-Za-z0-9\-\.\_]+(?:\s|$)/;

export const parseContents = (contents) => {
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
