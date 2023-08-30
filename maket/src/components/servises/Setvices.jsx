import style from './services.module.css'


import home from '../../assets/home.png'
import factory from '../../assets/factory.png'
import house from '../../assets/house.png'

const Setvices = () => {
  return (
    <>
      <div className="container">
        <div className={style['service__box']}>
          <h2 className={style['service__box-title']}>
            Our Services
          </h2>
          <a className={style['service__box-btn']} href="">
            Explore services
          </a>
        </div>
        <div className={style['service__inner']}>
          <div>
            <img src={home} alt="home" />
            <h3 className={style['inner__box-title ']}>
              House cleaning
            </h3>
            <p className={style['inner__box-text']}>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div>
            <img src={house} alt="house" />
            <h3 className={style['inner__box-title ']}>
              House cleaning
            </h3>
            <p className={style['inner__box-text']}>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
          <div>
            <img src={factory} alt="factory" />
            <h3 className={style['inner__box-title ']}>
              House cleaning
            </h3>
            <p className={style['inner__box-text']}>
              Lorem ipsum dolor sit amet consecte tur adipiscing elit semper dalaracc lacus vel facilisis volutpat est.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Setvices