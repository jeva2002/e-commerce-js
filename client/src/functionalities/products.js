import { showCards } from './card.js';
import { insertCommon, links } from './common.js';
import { getProducts } from './request.js';

insertCommon();
links();

const showProducts = async () => {
  const search = sessionStorage.getItem('search')
    ? JSON.parse(sessionStorage.getItem('search'))
    : null;
  const searchByWord = sessionStorage.getItem('searchByWord')
    ? JSON.parse(sessionStorage.getItem('searchByWord'))
    : null;
  if (search) showCards(await getProducts(`?type=${search}`));
  else if (searchByWord) {
    showCards(await getProducts(`?q=${searchByWord}`));
    if (document.querySelector('.card-container').children.length === 0) {
      document.querySelector('.card-container').innerHTML = `
      <h1 id="error">No hay productos con esta característica :c</h1>
      `;
    }
  } else showCards(await getProducts());
  sessionStorage.removeItem('search');
  sessionStorage.removeItem('searchByWord');
};

showProducts();
