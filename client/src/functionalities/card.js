import { createCard } from '../components/card.js';

const increaseAmount = (_amount, _parent) => {
  if (isNaN(_amount.innerText)) _amount.innerText = 0;
  let flag = parseInt(_amount.innerText);
  _amount.innerText = flag + 1;
  addCart(_amount.innerText, _parent);
};

const reduceAmount = (_amount, _parent) => {
  let flag = parseInt(_amount.innerText);
  if (flag > 0) _amount.innerText = flag - 1;
  addCart(_amount.innerText, _parent);
};

const addCart = (_amount, _parent) => {
  let listCart = !sessionStorage.getItem('cart')
    ? []
    : JSON.parse(sessionStorage.getItem('cart'));
  const newItem = { id: _parent.children[5].innerText, amount: _amount };
  if (listCart.length === 0) listCart.push(newItem);
  else {
    for (let i = 0; listCart.length > i; i++) {
      if (parseInt(listCart[i].id) === parseInt(newItem.id)) {
        listCart[i] = newItem;
      } else if (!listCart.find((e) => e.id === newItem.id))
        listCart.push(newItem);
    }
  }
  sessionStorage.setItem('cart', JSON.stringify(listCart));
};

const modifyFavorites = (_id) => {
  const favoritesList = localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites'))
    : null;
  let list;
  if (favoritesList) {
    const flag = favoritesList.find((element) => element === _id);
    if (flag) list = [];
    else list = [_id];
    if (favoritesList.length === undefined) {
      list.push(favoritesList);
    } else {
      for (let i = 0; i < favoritesList.length; i++) {
        if (favoritesList[i] !== _id) {
          list.push(favoritesList[i]);
        }
      }
    }
  } else {
    list = [_id];
  }
  localStorage.setItem('favorites', JSON.stringify(list));
};

const isFavorite = (_id, _element) => {
  const favorites =
    localStorage.getItem('favorites') === null
      ? []
      : JSON.parse(localStorage.getItem('favorites'));
  let flag = favorites.find((element) => element === _id);
  if (flag) {
    _element.classList.add('favorite');
  }
};

const giveFuncionalities = () => {
  const amountArray = Array.from(document.getElementsByClassName('amount'));
  const minusArray = Array.from(document.getElementsByClassName('minus'));
  const plusArray = Array.from(document.getElementsByClassName('plus'));
  const favoriteArray = Array.from(document.getElementsByClassName('heart'));
  const parents = [];
  for (let element in amountArray) {
    parents.push(amountArray[element].parentElement.parentElement);
    minusArray[element].addEventListener('click', () => {
      reduceAmount(amountArray[element], parents[element]);
      document.querySelector('.cart').classList.add('ocult');
    });
    plusArray[element].addEventListener('click', () => {
      increaseAmount(amountArray[element], parents[element]);
      document.querySelector('.cart').classList.add('ocult');
    });
    const id = parseInt(
      favoriteArray[element].parentNode.children[1].children[5].innerText
    );
    favoriteArray[element].addEventListener('click', () => {
      favoriteArray[element].classList.toggle('favorite');
      modifyFavorites(id);
    });
    isFavorite(id, favoriteArray[element]);
  }
};

export const showCards = (_data) => {
  const container = document.querySelector('.card-container');
  if (_data.length === undefined) {
    container.appendChild(createCard(_data));
  } else {
    for (let i = 0; i < _data.length; i++) {
      container.appendChild(createCard(_data[i]));
    }
  }
  giveFuncionalities();
};
