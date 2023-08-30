import style from './hero.module.css'

import img from '../../assets/IMAGE.png'

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className={style['hero__box']}>
          <div>
            <h1 className={style['hero__box-title']}>
              Quality cleaning for your home
            </h1>
            <p className={style['hero__box__text']}>
              Condimentum mauris sit cursus amet id non neque pharetra nulla ornare sed facilisis senectus dapibus nibh ultrices eget suscipit aliquet et nulla magna lacus penatibus.
            </p>
            <ul className={style['hero__inner-item']}>
              <li className={style['item__list']}>
                <a className={style['hero__inner-link']} href="">Get a free quote</a>
              </li>
              <li className={style['item__lists']}>
                <p>Call us now <br />
                  <a className={style ['hero__inner-links']} href="tell">(414) 567 - 2109</a>
                </p>
              </li>
            </ul>
          </div>
          <div>
            <img className={style["img"]} src={img} alt="one person cleaning home" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero