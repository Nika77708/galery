import React, { forwardRef } from 'react';
import css from './Button.module.css';

 function Button({ onClick }, ref) {
  
    return (
    <button ref={ref} className={css.button} onClick={onClick}>
      Load more
    </button>
  );
}

export default forwardRef(Button)
