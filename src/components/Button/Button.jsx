import React from 'react';
import css from './Button.module.css';

export default function Button({onClick}) {
  return <button className={css.button} onClick={onClick}>Load more</button>;
}