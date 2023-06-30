import { Searchbar } from './Form/Searchbar';
import css from './App.module.css';
import { fetchImages } from 'servises/api';
import { useEffect, useState } from 'react';
import ImageGallery from './Gallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export const App = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState(1);
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState('idel');
  const [totalHits, setTotalHits] = useState(0);

  const onLoadMore = () => {
    setList(prevState => prevState + 1);
    window.scrollTo({
      top: 2000,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (search === '') {
      return;
    }

    setStatus('loading');

    fetchImages(search, list)
      .then(response => {
        if (response.hits.length !== 0) {
          if (list > 1) {
            setImages(prevState => [...prevState, ...response.hits]);
          } else {
            setImages(response.hits);
          }
          //   console.log(response);
          setStatus('resolve');
          setTotalHits(response.totalHits);
        } else {
          setStatus('rejected');
        }
      })
      .catch(error => setStatus('rejected'));
  }, [search, list]);

  console.log(images);

  // получили значение search из submitForm в Searchbar, перезаписали значение search в useState и задали для первого поиска 1 страницу
  const handleFormSubmit = search => {
    setSearch(search);
    setList(1);
    // console.log(search);
  };

  console.log(list);
  return (
    <div className={css.App}>
      <Searchbar submitForm={handleFormSubmit} />
      {status === 'idel' && <div>What would you like to find?</div>}
      {status === 'loading' && <Loader />}
      {status === 'resolve' && (
        <>
          <ImageGallery images={images} />
          {images.length < totalHits && <Button onClick={onLoadMore} />}
        </>
      )}
      {status === 'rejected' && <div>Nothing has been found</div>}
    </div>
  );
};
