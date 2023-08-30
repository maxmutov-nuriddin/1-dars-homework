import Logo from "../../assets/header-logo.svg"
import Burger from "../../assets/burger-bar.png"


import header from "./header.module.css"

const Header = () => {
  return (
    <>
      <nav className={header['header__nav']}>
        <img className={header['header__nav-logo']} src={Logo} alt="logo" />
        <ul className={header['header__nav-list']}>
          <li><img className="header__nav-logo" src={Logo} alt="logo" /></li>
          <li className="list__item"><a className={header['list__item-link']} href="">Home</a></li>
          <li className="list__item"><a className={header['list__item-link']} href="">About</a></li>
          <li className="list__item"><a className={header['list__item-link']} href="">Services</a></li>
          <li className="list__item"><a className={header['list__item-link']} href="">Articles</a></li>
          <li className="list__item"><a className={header['list__item-link']} href="">Contact</a></li>
        </ul>
        <ul className={header['header__nav-lists']}>
          <li className="lists__item"><a className={header['list__item-link']} href="">Cart (<span>0</span>)</a></li>
          <li className="lists__item"><a className={header['list__item-links']} href="">Get a free quote</a></li>
        </ul>
        <img className={header['header__nav-burger']} src={Burger} alt="burger" />
      </nav>
    </>
  )
}

export default Header