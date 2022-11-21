import { createCartItem } from '../components/cart-item.js';
import { insertCommon, links } from './common.js';
import { getProducts, createSale } from './request.js';

const addCart = (_amount, _parent) => {
  let listCart = !sessionStorage.getItem('cart')
    ? []
    : JSON.parse(sessionStorage.getItem('cart'));
  const newItem = { id: _parent, amount: _amount };
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

const modifyTotalItem = (_position, _amount) => {
  const total = document.querySelectorAll('.total-price');
  let price = document.querySelectorAll('.price');
  total[_position].innerHTML =
    '$' +
    (parseFloat(price[_position].innerHTML.replace('$', '')) * _amount).toFixed(
      2
    );
};

const modifyAmount = () => {
  const listButtons = Array.prototype.slice.call(
    document.querySelectorAll('.buttons-container')
  );
  for (let i = 0; i < listButtons.length; i++) {
    listButtons[i].addEventListener('click', (e) => {
      const amount = document.querySelectorAll('.amount-item');
      if (e.target.value === '+') {
        amount[i].innerHTML = parseInt(amount[i].innerHTML) + 1;
      } else if (e.target.value === '-') {
        if (parseInt(amount[i].innerHTML) > 0)
          amount[i].innerHTML = parseInt(amount[i].innerHTML) - 1;
      }
      addCart(
        amount[i].innerHTML,
        listButtons[i].parentNode.children[0].innerHTML
      );
      modifyTotalItem(i, parseInt(amount[i].innerHTML));
      modifyCartTotal();
    });
  }
};

const deleteItem = (_id) => {
  const listItems = !sessionStorage.getItem('cart')
    ? null
    : JSON.parse(sessionStorage.getItem('cart'));
  const updatedList = [];
  for (let i = 0; listItems.length > i; i++) {
    if (parseInt(listItems[i].id) !== parseInt(_id))
      updatedList.push(listItems[i]);
  }
  sessionStorage.setItem('cart', JSON.stringify(updatedList));
  location.reload();
};

const addFuncionalities = () => {
  modifyAmount();
  const listRemoves = Array.prototype.slice.call(
    document.querySelectorAll('.remove')
  );
  for (let i = 0; i < listRemoves.length; i++) {
    listRemoves[i].addEventListener('click', () => {
      const id =
        listRemoves[i].parentElement.parentElement.children[0].innerHTML;
      deleteItem(id);
    });
  }
};

const itemsList = sessionStorage.getItem('cart')
  ? JSON.parse(sessionStorage.getItem('cart'))
  : null;

const showAccumulated = async (_itemsList) => {
  if (_itemsList) {
    const total = document.getElementById('subtotal');
    total.children[1].innerHTML = '0';
    let accumulated = 0;
    if (_itemsList.length === 0 && _itemsList[0]) {
      const request = await getProducts(_itemsList[0].id);
      accumulated = (
        parseFloat(request.price) * parseInt(_itemsList[0].amount)
      ).toFixed(2);
      total.children[1].innerHTML = accumulated;
    } else if (_itemsList.length > 0) {
      for (let i = 0; i < _itemsList.length; i++) {
        const request = await getProducts(_itemsList[i].id);
        accumulated +=
          parseFloat(request.price) * parseInt(_itemsList[i].amount);
      }
      total.children[1].innerHTML = '$' + accumulated.toFixed(2);
    }
    return accumulated;
  }
};

const modifyCartTotal = async () => {
  const itemsList = sessionStorage.getItem('cart')
    ? JSON.parse(sessionStorage.getItem('cart'))
    : null;

  const accumulated = await showAccumulated(itemsList);
  const shipping = parseFloat(
    document.getElementById('shipping').children[1].innerHTML.replace('$', '')
  );
  document.getElementById('total-container').children[1].innerHTML =
    '$' + (shipping + (accumulated > 0 ? accumulated : -shipping)).toFixed(2);
};

const showItems = async (_itemsList) => {
  if (_itemsList) {
    const container = document.querySelector('.items-container');
    if (_itemsList.length === 0 && _itemsList[0]) {
      if (_itemsList[0].amount > 0) {
        const cart = createCartItem(
          await getProducts(_itemsList[0].id),
          parseInt(_itemsList[0].amount)
        );
        container.appendChild(cart);
      }
    } else if (_itemsList.length > 0) {
      for (let i = 0; _itemsList.length > i; i++) {
        if (_itemsList[i].amount > 0) {
          const cart = createCartItem(
            await getProducts(_itemsList[i].id),
            parseInt(_itemsList[i].amount)
          );
          container.appendChild(cart);
        }
      }
    }
    addFuncionalities();
  }
};

document.getElementById('return-button').addEventListener('click', () => {
  window.location.href = `http://${window.location.host}/src/components/products.html`;
});

document.getElementById('checkout-button').addEventListener('click', (e) => {
  e.preventDefault();
  const total = document
    .querySelector('#total-container')
    .children[1].innerHTML.replace('$', '');
  if (parseInt(total) > 0) {
    document
      .querySelector('.finalize-purchase')
      .classList.remove('hidden-purchase');
  }
});

document.getElementById('cancel').addEventListener('click', () => {
  document.querySelector('.finalize-purchase').classList.add('hidden-purchase');
});

document
  .querySelector('.finalize-purchase')
  .addEventListener('submit', async (e) => {
    try {
      e.preventDefault();
      const total = document
        .querySelector('#total-container')
        .children[1].innerHTML.replace('$', '');

      const products = sessionStorage.getItem('cart')
        ? JSON.parse(sessionStorage.getItem('cart'))
        : null;
      if (products) {
        const listProducts = [];
        for (let i = 0; i < products.length; i++) {
          if (parseInt(products[i].amount) !== 0)
            listProducts.push(products[i]);
        }
        const data = {
          name: e.target.name.value,
          address: e.target.address.value,
          phone: e.target.phone.value,
          products: listProducts,
          total: total,
        };
        await createSale(data);
        sessionStorage.removeItem('cart');
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    } catch (error) {
      console.log(error);
    }
  });

insertCommon();
links();
showItems(itemsList);
modifyCartTotal();
