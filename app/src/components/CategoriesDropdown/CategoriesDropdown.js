import React, { useState } from 'react'; 
import classNames from 'classnames'
import s from './CategoriesDropdown.module.scss';
import { ReactComponent as ChevronIcon } from '../../assets/img/Chevron.svg';
import { ReactComponent as ChevronRevertIcon } from '../../assets/img/ChevronRevert.svg';

function CategoriesDropdown() {
  const [isCategoriesOpened, setCategoriesVisibility] = useState(false);

  const CategoriesList = () => (
  <div className={isCategoriesOpened? s.menuOpen: s.menuClose}>
    <div className={s.dropdownTitle}>
      <h3>Choose a category</h3>
      <p>For your question</p>
    </div>
    <ul className={s.categoriesList}>
      <li className={s.item}>About</li>
      <li className={s.item}>How Does it work?</li>
      <li className={s.item}>ESG score</li>
      <li className={s.item}>Tokenization</li>
      <li className={s.item}>nfa/nft</li>
      <li className={s.item}>Marketplace</li>
      <li className={s.item}>Calculators</li>
      <li className={s.item}>Offset certificates</li>
      <li className={s.item}>Solutions</li>
      <li className={s.item}>Legal</li>
      <li className={s.item}>api</li>
    </ul>
  </div>
  );
  
  const toggleCategories = () => {
    setCategoriesVisibility(!isCategoriesOpened);
  }

  return (
    <div>
      <div className={classNames(s.dropdownComponent, 'roundShaped')}>
        <input type="text" placeholder="All Categories" className={s.input}/>
        <button className={s.dropdownIcon} onClick={toggleCategories}>
          {isCategoriesOpened && <ChevronRevertIcon />}
          {!isCategoriesOpened && <ChevronIcon />}
        </button>
      </div>
      {isCategoriesOpened && <CategoriesList />}
    </div>
  );
}

export default CategoriesDropdown;
