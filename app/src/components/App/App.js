import { ReactComponent as Logo320 } from '../../assets/img/logo-320.svg';
import { ReactComponent as LangIco } from '../../assets/img/Language.svg';
import { ReactComponent as SignIco } from '../../assets/img/SignIn.svg';
import { ReactComponent as MenuIco } from '../../assets/img/Menu.svg';
import s from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className={s.appHeader}>
        <Logo320 />
        <ul>
          <LangIco />
          <li>ENG</li>
        </ul>
        <button>
          <SignIco />
          SIGN IN hello
        </button>
        <ul>
          <MenuIco />
          <li>MENU</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
