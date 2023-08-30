import style from '../hero/hero.module.css'
import styles from './follow.module.css'

import person from '../../assets/Group.png'

const Follow = () => {
  return (
    <div className={styles['follow']}>
      <div className="conatiner">
        <div className={styles['follow__box']}>
          <div>
            <img className={styles['follow__box-img']} src={person} alt="one person cleaning flowers" />
          </div>
          <div>
            <h1 className={styles['follow__box-title']}>
              Quality cleaning for your home
            </h1>
            <p className={styles['follow__box__text']}>
              Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.
            </p>
            <ul className={style['hero__inner-item']}>
              <li className={style['item__list']}>
                <a className={style['hero__inner-link']} href="">Get a free quote</a>
              </li>
              <li className={style['item__lists']}>
                <p>Call us now <br />
                  <a className={styles ['follow__inner-links']} href="tell">(414) 567 - 2109</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Follow