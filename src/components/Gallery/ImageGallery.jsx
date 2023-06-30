import React from 'react'
import css from "./ImageGallery.module.css"
import ImageGaleryItem from './ImageGalleryItem';


export default function ImageGallery({images}) {
  return <ul className={css.imageGallery}>{
    images.map(item => <ImageGaleryItem key={item.id} {...item}/>)
  }</ul>;
}