import { giveFuncionalities, showCards } from './card.js';
import { insertCommon, links } from './common.js';
import { getProducts } from './request.js';

const container = document.querySelector('.card-container');

const showFavorites = async () => {
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
    container.innerHTML = '<h1 id="error">No hay favoritos :c</h1>';
  }
};

try {
  insertCommon();
  links();
  await showFavorites();
} catch (error) {
  console.log(error);
}
