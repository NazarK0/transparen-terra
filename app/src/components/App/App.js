import classNames from 'classnames';
import { ReactComponent as Logo320 } from '../../assets/img/logo-320.svg';
import { ReactComponent as Logo768 } from '../../assets/img/logo-768.svg';
import { ReactComponent as LangIco } from '../../assets/img/Lang.svg';
import { ReactComponent as SignIco } from '../../assets/img/Sign.svg';
import { ReactComponent as MenuIco } from '../../assets/img/Menu.svg';
import { ReactComponent as CloseIco } from '../../assets/img/Close.svg';
import { ReactComponent as MessagesIco } from '../../assets/img/Messages.svg';
import { ReactComponent as ShareIco } from '../../assets/img/Share.svg';

import SearchInput from '../SearchInput';
import CategoriesDropdown from '../CategoriesDropdown';
import s from './App.module.scss';

function App() {
  return (
    <section className={s.screen}>
      <header className={s.appHeader}>
        <Logo320 className={s.logo320}/>
        <Logo768 className={s.logo768}/>
        <div className={s.controls}>
          <ul>
            <LangIco />
            <li className={s.title}>ENG</li>
          </ul>
          <button className={s.middleCtrl}>
            <SignIco />
            <span className={classNames(s.title, s.middleTitle)}>SIGN IN</span>
          </button>
          <button className={s.closeBtn}>
            <CloseIco />
          </button>
          <ul className={s.menuBtn}>
            <MenuIco />
            <li className={s.title}>MENU</li>
          </ul>
        </div>
      </header>
      <main className={s.main}>
        <SearchInput />
        <CategoriesDropdown />
      </main>
      <footer className={s.footer}>
        <button>
          < MessagesIco />
        </button>
        <button>
          < ShareIco />
        </button>
      </footer>
    </section>
  );
}

export default App;
