import logoFooter from '../../assets/header-logo.svg'

import styles from './footer.module.css'

const Footer = () => {
  return (
    <>
      <div className={styles['footer']}>
        <ul>
          <li className={styles['footer__items-list']}>
            <strong>Quality cleaning for your home</strong>
          </li>
          <li className={styles['footer__items-list']}>
            <p>Lorem ipsum dolor sit amet cteturdo adipiscing elit, sed do eiusmo.</p>
          </li>
          <li className={styles['footer__items-list']}>
            <span className={styles['footer__items-list--span']}></span>
            <span className={styles['footer__items-list--span']}></span>
            <span className={styles['footer__items-list--span']}></span>
            <span className={styles['footer__items-list--span']}></span>
            <span className={styles['footer__items-list--span']}></span>
          </li>
        </ul>
        <ul>
          <li className={styles['footer__items-list']}>
            <strong>Contact us</strong>
          </li>
          <li className={styles['footer__items-list']}>
            <p>1827 Nickel Road, Los Angeles, CA, 90017, United States</p>
          </li>
          <li className={styles['footer__items-list']}>
            <a href='tell'>(414) 567 - 2109</a>
          </li>
          <li className={styles['footer__items-list']}>
            <p>contact@cleaning.com</p>
          </li>
        </ul>
        <ul>
          <li className={styles['footer__items-list']}>
            <strong>Hours</strong>
          </li>
          <li className={styles['footer__items-list']}>
            <p><strong>Monday to Friday</strong><br />6:00 AM - 9:00 PM</p>
          </li>
          <li className={styles['footer__items-list']}>
            <p><strong>Saturday & Sunday</strong><br />8:00 AM - 8:00 PM</p>
          </li>
        </ul>
        <ul>
          <li className={styles['footer__items-list']}>
            <strong>Get a free estimate</strong>
          </li>
          <li className={styles['footer__items-list']}>
            <a className={styles['footer__items-list--link']} href='tell'>(414) 567 - 2109</a>
            <p>Lorem ipsum dolor sit amet ectetur <br /> adipiscing elit, sed do eiusmod.</p>
          </li>
          <li className={styles['footer__items-list']}>
            <a className={styles['footer__items-list--links']} href="">Request a free quote</a>
          </li>
        </ul>
      </div>
      <div className={styles['footer__band']}></div>
      <div className={styles['footer__box']}>
        <img src={logoFooter} alt="logo" />
        <ul className={styles['footer__box-items']}>
          <li><p>Copyright © Cleaning X | Designed by <a className={styles['items__list-link']} href="">BRIX Templates</a></p></li>
          <li><p>- Powered by <a className={styles['items__list-link']} href="">Webflow</a></p></li>
          <li><a className={styles['items__list-link']} href="">-Licenses</a></li>
        </ul>
      </div>
    </>
  )
}

export default Footer