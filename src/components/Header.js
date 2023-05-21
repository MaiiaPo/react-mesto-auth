import headerLogoMobile from "../images/logo_mobile.svg";
import headerLogo from "../images/logo.svg";
import { Link, useNavigate  } from 'react-router-dom';

function Header(props) {
  const navigate = useNavigate ();
  function signOut(){
    localStorage.removeItem('jwt');
    navigate('/sign-in');
  }
  return (
    <header className="header">
      <div className="header__container">
        <Link to='/'>
          <picture>
            <source className="header__logo" media="(max-width: 767px)" srcSet={headerLogoMobile}/>
            <img className="header__logo" src={headerLogo} alt="Логотип 'Место'"/>
          </picture>
        </Link>
        <div className="header__auth" onClick={signOut}>Выйти</div>
      </div>
    </header>
  )
}

export default Header;
