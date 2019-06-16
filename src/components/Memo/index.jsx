import React, { useState } from 'react';
import Memo from './Memo';

export default (props) => {
  const [ isMenuOpen, setIsMenuOpen ] = useState(false);
  const handleMenuButtonClick = e => {
    console.log('handleMenuButtonClick');
    setIsMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <Memo 
      onMenuButtonClick={handleMenuButtonClick}
      isMenuOpen={isMenuOpen}
      onCloseMenu={handleCloseMenu}
      {...props} 
    />
  )
};

