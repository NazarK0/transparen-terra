import classNames from 'classnames';
import s from './SearchInput.module.scss';
import { ReactComponent as SearchIcon } from '../../assets/img/SearchIcon.svg';

function SearchInput() {
  return (
    <div className={classNames(s.searchInput, 'roundShaped')}>
      <input type="text" placeholder="Search" className={s.input}/>
      <div className={s.searchIcon}>
        <SearchIcon  />
      </div>
    </div>
  );
}

export default SearchInput;
