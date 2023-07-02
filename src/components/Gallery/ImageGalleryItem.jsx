import React, { useEffect, useState } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

export default function ImageGaleryItem({ webformatURL, tags }) {
  const [status, setStatus] = useState(false);

  const onEscape = event => {
    console.log('escape');
    if (event.code === 'Escape') {
      setStatus(false);
    }
  };

  useEffect(() => {
    // console.log('does it work?');
    if (status) {
      window.addEventListener('keydown', onEscape);
    } else {
      window.removeEventListener('keydown', onEscape);
    }
  }, [status]);

  const openModal = () => {
    setStatus(true);
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;
  };

  const modalClose = () => {
    setStatus(false);
    document.body.style.position = '';
    document.body.style.top = '';
  };

  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={tags}
        className={css.image}
        onClick={openModal}
      />
      {status && (
        <Modal webformatURL={webformatURL} tags={tags} onClick={modalClose} />
      )}
    </li>
  );
}
