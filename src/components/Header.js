import headerLogoMobile from "../images/logo_mobile.svg";
import headerLogo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <picture>
        <source className="header__logo" media="(max-width: 767px)" srcSet={headerLogoMobile}/>
        <img className="header__logo" src={headerLogo} alt="Логотип 'Место'"/>
      </picture>
    </header>
  )
}

export default Header;
