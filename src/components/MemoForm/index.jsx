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
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleContentChange = e => {
    setContent(e.target.value);
  };

  const handleKeyDown = e => {
    console.log('key down.');
    console.log('e.key : ', e.key);

    if (e.key === 'Enter') {
      dispatch({ type : 'ADD_MEMO', payload : content });
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
        value={content}
      />
    </div>
  );
};

export default MemoFormContainer;
