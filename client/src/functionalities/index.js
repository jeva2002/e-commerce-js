import { giveFuncionalities, showCards } from '../functionalities/card.js';
import { insertCommon, links } from './common.js';
import { getProducts } from './request.js';

insertCommon(true);
links(true);

showCards(await getProducts('?_limit=6'));
giveFuncionalities();

document.querySelector('.categories').addEventListener('click', (e) => {
  if (e.target.name) {
    sessionStorage.setItem('search', JSON.stringify(e.target.name));
    window.location.href = `http://${window.location.host}/src/components/products.html`;
  }
});
