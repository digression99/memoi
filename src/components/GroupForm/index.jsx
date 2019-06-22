import React, { useState } from 'react';

const GroupForm = () => {
  const [ name, setName ] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log('[handleSubmit] name : ', name);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button>Submit</button>
    </form>
  )
};

export default GroupForm;