import React, { useState } from 'react';
import shortid from 'shortid';
import { useDispatch } from 'react-redux';
import * as groupActions from 'modules/groups';
import Chip from 'elements/Chip';

const GroupForm = () => {
  const dispatch = useDispatch();
  const [ name, setName ] = useState('');
  const [ tagInput, setTagInput ] = useState('');
  const [ tags, setTags ] = useState([]);

  const validateForm = () => {
    if (name.length < 4) {
      console.log('name is too short');
      return false;
    }
    return true;
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (validateForm()) {
      console.log('submitted.');
      console.log('[handleSubmit] name : ', name);
      console.log('tags : ', tags);
      dispatch(groupActions.addGroup({ name, tags }));
    }
  };

  const handleTagInputKeyDown = e => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (tagInput.length === 0) return;

      setTags(prevState => [...prevState, tagInput]);
      setTagInput('');
    } else if (e.key === 'Backspace' && tagInput.length === 0) {
      if (tags.length > 0) {
        setTags(prevState => prevState.slice(0, -1));
      }
    }
  };

  const handleTagInputChange = e => {
    console.log('[handleTagInputChange]');
    setTagInput(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="group-name">group name</label>
        <input type="text" value={name} onChange={e => setName(e.target.value)} name="group-name" placeholder="enter group name" id="group-name" />
      </div>
      <div>
        <label htmlFor="">tags</label>
        {tags.map(tag => <Chip key={shortid.generate()}>{tag}</Chip>)}
        <input
          type="text"
          value={tagInput}
          onChange={handleTagInputChange}
          onKeyDown={handleTagInputKeyDown}
        />
      </div>
      <button>Submit</button>
    </form>
  )
};

export default GroupForm;