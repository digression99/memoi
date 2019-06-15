import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const ContentInput = styled.input`
  min-width : 300px;
  max-width : 500px;
  height : 2.6rem;
  border : none;
  outline : none;

  border-radius : 10px;
  margin : 20px 0 20px 0;
  font-size : 1.2rem;
  transition : all .3s;
  box-shadow : 0 0 5px 3px rgba(0, 0, 0, 0.3);
  background : #e9ecef;
  padding : 6px 0 6px 10px;

  &:focus {
    background : white;
  }

  &:hover {
  }
`;

const MemoFormContainer = () => {
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
    <div onKeyDown={handleKeyDown}>
      <ContentInput 
        type="text" 
        name="content" 
        placeholder="Enter any link"
        onChange={handleContentChange}
        value={contents}
      />
    </div>
  );
};

export default MemoFormContainer;
