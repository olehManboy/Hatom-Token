import './header.css';
import logo from '../../assets/logo.svg';

function Header() {
  return (
    <div className="body">
      <div className="header-body">
        <img src={logo} alt="logo"/>

        <div className="flex">
          <p>Markets</p>
          <p>Governance</p>
          <p>Prices</p>
          <p>Docs</p>
          <p>Hatom Token</p>
        </div>

        <p>App</p>
      </div>
    </div>
  );
}

export default Header;
