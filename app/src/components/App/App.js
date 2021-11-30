import { ReactComponent as Logo } from '../../assets/img/Logo1.svg';
import s from './App.module.css';

function App() {
  return (
    <div className="App">
      <header className={s.appHeader}>
        <Logo />
        <ul>
          <li>ENG</li>
        </ul>
        <button>SIGN IN</button>
        <ul>
          <li>MENU</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
