import style from './articles.module.css'

import women from '../../assets/women.png'
import books from '../../assets/books.png'

const articles = () => {
  return (
    <div className={style['article']}>
      <div className='container'>
        <div className={style["article__box-inner"]}>
          <h2 className={style["article__title"]}>
            Articles & resources
          </h2>
          <div className={style["article__box"]}>
            <a className={style["article__box-btn"]} href="">Get a free quote</a>
            <a className={style["article__box-btns"]} href="">Browse articles</a>
          </div>
        </div>
        <div className={style['article__boxes']}>
          <div className={style['']}>
            <div className={style["article__inner-img"]}><img className={style["article__inner-imgs"]} src={books} alt="" /></div>
            <div className={style['article__inners']}>
              <h3 className={style['box__inner-title']}>
                8 best vacuum cleaners to clean any <br /> mess for your home in 2022
              </h3>
              <p>Lorem ipsum dolor sit amet conse ctetur adip <br /> iscing elit justo quis odio sit sit ac port titor sit <br /> males.</p>
              <div className={style['box__inner-date']}>
                <data>
                  Jan 28, 2022
                </data>
                <span className={style['mini__box']}>
                </span>
              </div>
            </div>
          </div>
          <div className={style['']}>
            <div className={style["article__inner-img"]}><img className={style["article__inner-imgs"]} src={women} alt="" /></div>
            <div className={style['article__inner']}>
              <h3 className={style['box__inner-title']}>
                How to properly disinfect your phone <br /> and other electronics
              </h3>
              <p>Lorem ipsum dolor sit amet conse ctetur adip <br /> iscing elit justo quis odio sit sit  ac port titor sit <br /> males.</p>
              <div className={style['box__inner-date']}>
                <data>
                  Jan 28, 2022
                </data>
                <span className={style['mini__box']}>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default articles