import React from 'react'
import css from "./Modal.module.css"

export default function Modal({webformatURL, tags, onClick}) {
  return (
    <div className={css.overlay} onClick={onClick}>
      <div className={css.modal}>
        <img src={webformatURL} alt={tags} />
      </div>
    </div>
  );
}
