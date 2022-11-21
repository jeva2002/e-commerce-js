export const footerComponent = (_isIndex = false) => {
  const footer = document.createElement('footer');
  footer.innerHTML = `
  <div class="footer-info">
    <ul id="logo">
      <li><h2>Fast<span>kart</span>.</h2></li>
      <li>
        <p>
          in publishing and graphic <br />
          design, Lorem ipsum is a <br />
          placeholder text commonly <br />
          used to demonstrate the visual <br />
          form.
        </p>
      </li>
      <li>
        <img src=${
          _isIndex
            ? './src/imgs/footer/home-icon.svg'
            : '../imgs/footer/home-icon.svg'
        } alt="ícono casa" />
        <b
          >1418 Riverwood Drive, CA <br />
          96052, US</b
        >
      </li>
      <li>
        <img src=${
          _isIndex
            ? './src/imgs/footer/mail-icon.svg'
            : '../imgs/footer/mail-icon.svg'
        } alt="ícono correo" />
        <b>support@fastkart.com</b>
      </li>
    </ul>
    <ul id="categories">
      <li><h3>Categories</h3></li>
      <li><a href="">Vegetables & Fruit</a></li>
      <li><a href="">Beverages</a></li>
      <li><a href="">Meats & Seafood</a></li>
      <li><a href="">Frozen Foods</a></li>
      <li><a href="">Biscuits & Snacks</a></li>
      <li><a href="">Grocery & Staples</a></li>
    </ul>
    <ul id="useful-links">
      <li><h3>Useful Links</h3></li>
      <li><a href="">Home</a></li>
      <li><a href="">Shop</a></li>
      <li><a href="">About Us</a></li>
      <li><a href="">Blog</a></li>
      <li><a href="">Contact Us</a></li>
    </ul>
    <ul id="help-center">
      <li><h3>Help Center</h3></li>
      <li><a href="">Your Order</a></li>
      <li><a href="">Your Account</a></li>
      <li><a href="">Track Order</a></li>
      <li><a href="">Your Whishlist</a></li>
      <li><a href="">Search</a></li>
      <li><a href="">FAQ</a></li>
    </ul>
    <ul>
      <li><h3>Contact Us</h3></li>
      <li class="contact">
        <img src=${
          _isIndex
            ? './src/imgs/footer/phone-icon.svg'
            : '../imgs/footer/phone-icon.svg'
        } alt="ícono teléfono" />
        <div>
          <b>Hotline 24/7:</b>
          <p>+91 888 104 2340</p>
        </div>
      </li>
      <li class="contact">
        <img src=${
          _isIndex
            ? './src/imgs/footer/mail-icon.svg'
            : '../imgs/footer/mail-icon.svg'
        } alt="ícono correo" />
        <div>
          <b>Email Address:</b>
          <p>fastkart@hotmail.com</p>
        </div>
      </li>
      <li>
        <p>Download App:</p>
        <div id="download">
          <img
            src=${
              _isIndex
                ? './src/imgs/footer/playstore-logo.png'
                : '../imgs/footer/playstore-logo.png'
            }
            alt="Playstore logo"
          />
          <img src=${
            _isIndex
              ? './src/imgs/footer/apple-logo.png'
              : '../imgs/footer/apple-logo.png'
          } alt="Apple logo" />
        </div>
      </li>
    </ul>
  </div>
  <div class="icons">
    <b>2022 Fastkart All rights reserved</b>
    <div id="payment">
      <img src=${
        _isIndex
          ? './src/imgs/footer/paypal-logo.svg'
          : '../imgs/footer/paypal-logo.svg'
      } alt="PayPal logo" />
      <img src=${
        _isIndex
          ? './src/imgs/footer/visa-logo.svg'
          : '../imgs/footer/visa-logo.svg'
      } alt="Visa Logo" />
      <img
        src=${
          _isIndex
            ? './src/imgs/footer/master-card-logo.svg'
            : '../imgs/footer/master-card-logo.svg'
        }
        alt="MasterCard logo"
      />
      <img src=${
        _isIndex
          ? './src/imgs/footer/stripe-logo.svg'
          : '../imgs/footer/stripe-logo.svg'
      } alt="Stripe logo" />
    </div>
    <div class="social">
      <b>Stay connected:</b>
      <img src=${
        _isIndex
          ? './src/imgs/footer/facebook-logo.svg'
          : '../imgs/footer/facebook-logo.svg'
      } alt="Facebook logo" />
      <img src=${
        _isIndex
          ? './src/imgs/footer/twitter-logo.svg'
          : '../imgs/footer/twitter-logo.svg'
      } alt="Twitter logo" />
      <img
        src=${
          _isIndex
            ? './src/imgs/footer/instagram-logo.svg'
            : '../imgs/footer/instagram-logo.svg'
        }
        alt="Instragram logo"
      />
      <img
        src=${
          _isIndex
            ? './src/imgs/footer/pinterest-logo.svg'
            : '../imgs/footer/pinterest-logo.svg'
        }
        alt="Pinterest logo"
      />
    </div>
  </div>
  `;

  return footer;
};
