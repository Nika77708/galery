import css from './Searchbar.module.css';
import { FcSearch } from 'react-icons/fc';

export const Searchbar = ({ submitForm }) => {

  const onFormSubmit = event => {
    //отключили перезагрузку странички (дефолтные события браузера)
    event.preventDefault();

    // пробрасываем вверх данные из инпута
    submitForm(event.target.search.value)
    
    // console.log(event.target.search.value);
  };

  return (
    <div className={css.searchbar}>
      <form onSubmit={onFormSubmit} className={css.searchForm} action="">

        <button className={css.button}>
          <FcSearch className={css.label} />
        </button>

        <input
          className={css.input}
          name="search"
          type="text"
          placeholder="Search images and photos"
        />
      </form>
    </div>
  );
};
