import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Input from 'elements/Input';

const MemoFormContainer = ({ onFocus, onBlur, ...rest }) => {
  const [contents, setContent] = useState("");
  const dispatch = useDispatch();

  const handleContentChange = e => {
    setContent(e.target.value);
  };

  const parseHashtags = contents => {
    const splitStr = contents.split(' ');
    const hashtagList = [];
    const regex = /(?:\s|^)#[A-Za-z0-9\-\.\_]+(?:\s|$)/;

    splitStr.forEach(str => {
      if (str.match(regex)) {
        console.log('matched : ', str);
        hashtagList.push(str.substr(1));
      }
    });
    return hashtagList;
  };

  const handleKeyDown = e => {

    if (e.key === 'Enter') {
      const parsedHashtags = parseHashtags(contents);

      dispatch({ type : 'ADD_MEMO', payload : {
        contents,
        hashtags : parsedHashtags
      }});

      setContent('');
    }
  };

  return (
    <Input
      onKeyDown={handleKeyDown}
      type="text"
      name="content"
      placeholder="Enter any link"
      onChange={handleContentChange}
      value={contents}
      onFocus={onFocus}
      onBlur={onBlur}
      {...rest}
    />
  );
};

export default MemoFormContainer;
