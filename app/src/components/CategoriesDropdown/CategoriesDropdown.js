import classNames from 'classnames'
import s from './CategoriesDropdown.module.scss';
import { ReactComponent as ChevronIcon } from '../../assets/img/Chevron.svg';

function CategoriesDropdown() {
  return (
    <div className={classNames(s.dropdownComponent, 'roundShaped')}>
      <input type="text" placeholder="All Categories" className={s.input}/>
      <button className={s.dropdownIcon}>
        <ChevronIcon  />
      </button>
    </div>
  );
}

export default CategoriesDropdown;
