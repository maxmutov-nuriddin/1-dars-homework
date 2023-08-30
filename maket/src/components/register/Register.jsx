import style from "./register.module.css"



const Register = () => {
  return (
    <div className={style['register']}>
      <div className="container">
        <div className={style['register__boxes']}>
          <div>
            <div className={style['register__inner']}>
              <h2>
                Contact Us
              </h2>
              <p>
                In dignissim euismod pretium amet enim a eu nam ut urna accumsan pellentesque lacus duis pharetra eutortor.
              </p>
              <div className={style['item__lists']}>
                <p>Call us now <br />
                  <a className={style['hero__inner-links']} href="tell">(414) 567 - 2109</a>
                </p>
              </div>
            </div>
            <hr />
            <div className={style['register__box']}>
              <h2>
                Not convinced yet?
              </h2>
              <p>
                Massa bibendum consectetur maurisid gravida purus, dolor dui amet morbi non nunc urna purus diam.
              </p>
              <a className={style['register__box-link']} href="">Browse our packages</a>
            </div>
            <div></div>
          </div>
          <div className={style['register__inner-box']}>
            <div>
              <label htmlFor="name">Full name</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="number">Phone number</label>
              <input type="number" id="number" />
            </div>
            <div>
              <label htmlFor="name">Address</label>
              <input type="address" id="name" />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </div>
            <div>
              <label htmlFor="name">Requested service</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="name">Day of service</label>
              <input type="text" id="name" />
            </div>
            <div>
              <label htmlFor="text">Add a note</label>
              <textarea name="" id="text" cols="30" rows="10"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register