import { footerComponent } from '../components/footer.js';
import { headerComponent } from '../components/header.js';
import { selectLocation } from '../components/locations-modal.js';
import { acummulatedTotal, deleteItem, showItems } from './cart-nav.js';
import { getLocations } from './request.js';

export const URL_SERVER = 'http://localhost:3000/';

const routes = (_target) => {
  switch (_target) {
    case 'home':
      window.location.href = `http://${window.location.host}/index.html`;
      break;
    case 'product':
      window.location.href = `http://${window.location.host}/src/components/products.html`;
      break;
  }
};

export const links = () => {
  document.querySelector('.links-nav').addEventListener('click', (e) => {
    routes(e.target.value);
  });
};

export const insertCommon = (_isIndex) => {
  const body = document.querySelector('body');
  body.insertAdjacentElement('afterbegin', headerComponent(_isIndex));
  document.getElementById('toggler').addEventListener('click', () => {
    document.getElementById('md-nav').classList.toggle('hidden');
  });

  document.getElementById('cart-icon').addEventListener('click', async () => {
    try {
      document.getElementById('item-container').innerHTML = '';
      const itemsCart = !sessionStorage.getItem('cart')
        ? null
        : JSON.parse(sessionStorage.getItem('cart'));
      if (itemsCart) {
        if (itemsCart.length === 0) {
          if (itemsCart.amount > 0) {
            showItems(itemsCart[0], _isIndex);
          } else {
            if (JSON.parse(sessionStorage.getItem('cart')).id)
              deleteItem(itemsCart[0].id);
          }
        } else {
          for (let i = 0; itemsCart.length > i; i++) {
            if (itemsCart[i].amount > 0) {
              showItems(itemsCart[i], _isIndex);
            } else {
              deleteItem(itemsCart[i].id);
            }
          }
        }
      }

      acummulatedTotal();

      document.querySelector('#view').addEventListener('click', () => {
        window.location.href = `http://${window.location.host}/src/components/cart.html`;
      });

      document.querySelector('#check').addEventListener('click', () => {
        window.location.href = `http://${window.location.host}/src/components/cart.html`;
      });

      document.querySelector('.cart').classList.toggle('ocult');
    } catch (error) {
      console.error(error);
    }
  });

  const categoriesModal = document.querySelector('.categories-modal');

  document.getElementById('all-categories').addEventListener('click', () => {
    categoriesModal.classList.toggle('hide-modal');
  });

  categoriesModal.addEventListener('click', (e) => {
    if (e.target.name) {
      sessionStorage.setItem('search', JSON.stringify(e.target.name));
      window.location.href = `http://${window.location.host}/src/components/products.html`;
    }
  });

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    sessionStorage.setItem('searchByWord', JSON.stringify(e.target[1].value));
    window.location.href = `http://${window.location.host}/src/components/products.html`;
  });

  document.getElementById('favorites-icon').addEventListener('click', () => {
    window.location.href = `http://${window.location.host}/src/components/favorites.html`;
  });

  document.getElementById('fav-icon-res').addEventListener('click', () => {
    window.location.href = `http://${window.location.host}/src/components/favorites.html`;
  });

  document.getElementById('cart-icon-res').addEventListener('click', () => {
    window.location.href = `http://${window.location.host}/src/components/cart.html`;
  });

  document.getElementById('user-icon').addEventListener('click', () => {
    window.location.href = `http://${window.location.host}/src/components/admin.html`;
  });

  document.getElementById('user-icon-res').addEventListener('click', () => {
    window.location.href = `http://${window.location.host}/src/components/admin.html`;
  });

  document.getElementById('main-title').addEventListener('click', () => {
    window.location.href = `http://${window.location.host}/index.html`;
  });

  document.getElementById('location').addEventListener('click', async (e) => {
    e.preventDefault();
    const ciudades = (await getLocations()).ciudades;
    document.body.appendChild(selectLocation(_isIndex, ciudades));
    document.getElementById('close-modal').addEventListener('click', () => {
      document
        .getElementById('location-modal')
        .parentNode.removeChild(document.getElementById('location-modal'));
    });
    document
      .getElementById('location-modal')
      .addEventListener('submit', (e) => {
        e.preventDefault();
        if (e.target.department.value) {
          if (e.target.municipality.value) {
            localStorage.setItem(
              'location',
              JSON.stringify(
                e.target.department.value + ', ' + e.target.municipality.value
              )
            );
            document
              .getElementById('location-modal')
              .parentNode.removeChild(
                document.getElementById('location-modal')
              );
          }
        }
      });
  });

  document.defaultView.addEventListener('resize', () => {
    if (body.clientWidth > 630) {
      document.getElementById('md-nav').classList.add('hidden');
      document.querySelector('.categories-modal').classList.add('hide-modal');
    }
  });
  body.insertAdjacentElement('beforeend', footerComponent(_isIndex));
};
