import headerLogoMobile from "../images/logo_mobile.svg";
import headerLogo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <picture>
          <source className="header__logo" media="(max-width: 767px)" srcSet={headerLogoMobile}/>
          <img className="header__logo" src={headerLogo} alt="Логотип 'Место'"/>
        </picture>
        <div className="header__auth">Войти</div>
      </div>
    </header>
  )
}

export default Header;
