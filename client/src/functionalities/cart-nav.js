import { createItemCartNav } from '../components/cart-nav.js';
import { getProducts } from './request.js';

export const acummulatedTotal = async () => {
  try {
    const acumulated = document.getElementById('acumulated');
    const listItems = !sessionStorage.getItem('cart')
      ? 0
      : JSON.parse(sessionStorage.getItem('cart'));
    let total = 0;
    for (let i = 0; listItems.length > i; i++) {
      total +=
        listItems[i].amount *
        parseFloat((await getProducts(listItems[i].id)).price);
    }
    acumulated.innerText = '$' + total.toFixed(2);
  } catch (error) {
    console.error(error);
  }
};

export const deleteItem = (_id) => {
  const listItems = !sessionStorage.getItem('cart')
    ? null
    : JSON.parse(sessionStorage.getItem('cart'));
  const updatedList = [];
  for (let i = 0; listItems.length > i; i++) {
    if (parseInt(listItems[i].id) !== parseInt(_id))
      updatedList.push(listItems[i]);
  }
  sessionStorage.setItem('cart', JSON.stringify(updatedList));
  acummulatedTotal();
};

export const showItems = async (_item, _isIndex) => {
  try {
    const data = await getProducts(_item.id);
    document
      .getElementById('item-container')
      .appendChild(createItemCartNav(data, _item.amount, _isIndex));
    const buttonRemoveList = Array.prototype.slice.call(
      document.querySelectorAll('.remove')
    );
    buttonRemoveList.forEach((e) => {
      e.addEventListener('click', () => {
        const parent = e.parentNode.parentNode;
        const id = parseInt(e.parentNode.children[3].innerText);
        deleteItem(id);
        parent.parentNode.removeChild(parent);
      });
    });
  } catch (error) {
    console.log(error);
  }
};
