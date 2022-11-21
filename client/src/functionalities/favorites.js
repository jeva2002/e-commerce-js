import { giveFuncionalities, showCards } from './card.js';
import { insertCommon, links } from './common.js';
import { getProducts } from './request.js';

insertCommon();
links();

const listFavorites = localStorage.getItem('favorites')
  ? JSON.parse(localStorage.getItem('favorites'))
  : null;

if (listFavorites.length) {
  try {
    if (listFavorites === 0) showCards(await getProducts(listFavorites));
    else {
      for (let i = 0; i < listFavorites.length; i++) {
        showCards(await getProducts(listFavorites[i]));
      }
      giveFuncionalities();
    }
  } catch (error) {
    console.error(error);
  }
} else {
  const container = document.querySelector('.card-container');
  container.innerHTML = '<h1 id="error">No hay favoritos :c</h1>';
}

const favoriteArray = Array.from(document.getElementsByClassName('heart'));
for (let element in favoriteArray) {
  favoriteArray[element].addEventListener('click', () => {
    location.reload();
  });
}
