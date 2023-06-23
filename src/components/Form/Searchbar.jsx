import css from './Searchbar.module.css';
import { FcSearch } from 'react-icons/fc';

export const Searchbar = () => {
  return (
    <div className={css.searchbar}>
      <form className={css.searchForm} action="">
        <button className={css.button}>
          <FcSearch className={css.label}/>
        </button>
        <input className={css.input} type="text" />
      </form>
    </div>
  );
};
