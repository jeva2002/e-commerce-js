export const headerComponent = (_isIndex = false) => {
  const header = document.createElement('header');
  header.innerHTML = `  
  <div class="user-options">
        <h6>Something you love is now on sale! <a href="">Buy Now!</a></h6>
        <div class="options">
          <img
            src=${
              _isIndex
                ? './src/imgs/header/usa-flag.png'
                : '../imgs/header/usa-flag.png'
            }
            width="15px"
            alt="flag-language"
          />
          <select name="select-language" id="select-language">
            <option value="English">English</option>
            <option value="Spanish">Español</option>
          </select>
          <select name="currency" id="currency">
            <option value="usd">USD</option>
            <option value="cop">COP</option>
          </select>
        </div>
      </div>
      <nav>
        <div class="main-nav">
          <h1>Fast<span>kart</span>.</h1>
          <form id="search-form">
            <button id="location">
              <img src=${
                _isIndex
                  ? './src/imgs/header/location.svg'
                  : '../imgs/header/location.svg'
              } alt="location-icon" />
            </button>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="I'm searching for..."
            />
            <button id="submit">
              <img src=${
                _isIndex
                  ? './src/imgs/header/search-icon.svg'
                  : '../imgs/header/search-icon.svg'
              } alt="search-icon" />
            </button>
            <span id="icons">
              <img
                src=${
                  _isIndex
                    ? './src/imgs/header/phone-icon.svg'
                    : '../imgs/header/phone-icon.svg'
                }
                alt="phone-icon"
                id="phone-icon"
              />
              |
              <img id="favorites-icon"
                src=${
                  _isIndex
                    ? './src/imgs/header/heart-icon.svg'
                    : '../imgs/header/heart-icon.svg'
                }
                alt="favorites-icon"
              />
              |
              <img id="cart-icon" src=${
                _isIndex
                  ? './src/imgs/header/cart-icon.svg'
                  : '../imgs/header/cart-icon.svg'
              } alt="cart-icon" />
              |
              <img
                src=${
                  _isIndex
                    ? './src/imgs/header/user-icon.svg'
                    : '../imgs/header/user-icon.svg'
                }
                alt="user-icon"
                id="user-icon"
              />
            </span>
          </form>
          <button id="toggler">
            <img src=${
              _isIndex
                ? './src/imgs/header/menu-toggler.svg'
                : '../imgs/header/menu-toggler.svg'
            } alt="menu" />
          </button>
        </div>
        <div class="links-container">
          <span id="all-categories">
            <img src=${
              _isIndex
                ? './src/imgs/header/categories-icon.svg'
                : '../imgs/header/categories-icon.svg'
            }  alt="menu-icon" />
            <h4>All Categories</h4>
          </span>
          <form class="links links-nav">
            <select name="home" id="home">
              <option value="home">Home</option>
            </select>
            <select name="shop" id="shop">
              <option value="shop">Shop</option>
            </select>
            <select name="Product" id="Product">
              <option value="product">Product</option>
            </select>
            <select name="mega-menu" id="mega-menu">
              <option value="mega-menu">Mega Menu</option>
            </select>
            <select name="blog" id="blog">
              <option value="blog">Blog</option>
            </select>
            <select name="pages" id="pages">
              <option value="pages">Pages</option>
            </select>
            <a href="">Contact</a>
          </form>
          <button>
            <img src=${
              _isIndex
                ? './src/imgs/header/thunder-icon.svg'
                : '../imgs/header/thunder-icon.svg'
            } alt="lightning-icon" />
          </button>
        </div>
        <div id="md-nav" class="hidden">
          <div class="options-md">
            <img
              src=${
                _isIndex
                  ? './src/imgs/header/colombia-flag.png'
                  : '../imgs/header/colombia-flag.png'
              }
              width="15px"
              alt="flag-language"
            />
            <select name="select-language" id="select-language">
              <option value="Spanish">Español</option>
              <option value="English">English</option>
            </select>
            <select name="currency" id="currency">
              <option value="cop">COP</option>
              <option value="usd">USD</option>
            </select>
          </div>
          <span id="icons-md">
            <img
              src=${
                _isIndex
                  ? './src/imgs/header/phone-icon.svg'
                  : '../imgs/header/phone-icon.svg'
              }
              alt="phone-icon"
              id="phone-icon-md"
            />
            |
            <img id="fav-icon-res" src=${
              _isIndex
                ? './src/imgs/header/heart-icon.svg'
                : '../imgs/header/heart-icon.svg'
            } alt="favorites-icon"/>
            |
            <img id="cart-icon-res" src=${
              _isIndex
                ? './src/imgs/header/cart-icon.svg'
                : '../imgs/header/cart-icon.svg'
            } alt="cart-icon" />
            |
            <img
              id="user-icon-res"
              src=${
                _isIndex
                  ? './src/imgs/header/user-icon.svg'
                  : '../imgs/header/user-icon.svg'
              }
              alt="user-icon"
              id="user-icon-md"
            />
          </span>
          <div class="links-md">
            <a href=${`http://${window.location.host}/index.html`}>Home</a>
            <a href="">Shop</a>
            <a href="${`http://${window.location.host}/src/components/products.html`}">Product</a>
            <a href="">Mega Menu</a>
            <a href="">Blog</a>
            <a href="">Pages</a>
            <a href="">Contact</a>
          </div>
        </div>
      </nav>
      <div class="cart ocult">
      <div id="item-container"></div>
      <div id="block">
        <div id="total">
          <h3>Total:</h3>
          <button id="view">View Cart</button>
        </div>
        <div id="interact">
          <h3 id="acumulated">$0</h3>
          <button id="check">Checkout</button>
        </div>
      </div>
    </div>
    <form class="categories-modal hide-modal">
    <h3>Categories</h3>
    <input type="button" value="Vegetables & Fruit" name="vegetablesFruit" />
    <input type="button" value="Meats & Seafood" name="meats" />
    <input type="button" value="Breakfast, Dairy and More" name="breakfast" />
    <input type="button" value="Sauces" name="sauces" />
    <input type="button" value="Drinks" name="drinks" />
    <input type="button" value="Cleanliness" name="cleanliness" />
  </form>
  `;

  return header;
};
