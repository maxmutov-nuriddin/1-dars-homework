import style from './about.module.css'

import calendar from '../../assets/calendar.png'
import cleaning from '../../assets/cleaning.png'
import card from '../../assets/card.png'

const About = () => {
  return (
    <>
      <div className="container">
        <h2 className={style["about__title"]}>
          About Us
        </h2>
        <p className={style['about__text']}>
          Sagittis nibh scelerisque vitae eget vulputate sem elementum sed <br /> neque nisi felis non ultrices massa id egestas quam velit pretium nu.
        </p>
        <div className={style['about__inner']}>
          <div className={style['inner__box']}>
            <img className={style['inner__box-img']} src={calendar} alt="calendar" />
            <h3 className={style['inner__box-title']}>1. Schedule online</h3>
            <p className={style['inner__box-text']}>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
          </div>
          <div className={style['inner__box']}>
            <img className={style['inner__box-img']} src={card} alt="calendar" />
            <h3 className={style['inner__box-title']}>1. Schedule online</h3>
            <p className={style['inner__box-text']}>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
          </div>
          <div className={style['inner__box']}>
            <img className={style['inner__box-img']} src={cleaning} alt="calendar" />
            <h3 className={style['inner__box-title']}>1. Schedule online</h3>
            <p className={style['inner__box-text']}>Sagittis nibh scelerisque vitae egetolment vulputate sem elementum sed n.</p>
          </div>
        </div>
        <div className={style['about__btn']}>
        <a className={style['about__btn-btn']}>Get a free quote</a>
        <a className={style['about__btn-btns']}>Explore services</a>
        </div>
      </div>
    </>
  )
}

export default About