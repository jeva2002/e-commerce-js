import { createAdminCard } from '../components/admin-card.js';
import { createSaleItem } from '../components/sale-item.js';
import { insertCommon, links } from './common.js';
import {
  deleteProduct,
  getProducts,
  modifyProduct,
  createProduct,
  getSales,
} from './request.js';

const modifyForm = document.querySelector('.modify-product');
const createForm = document.querySelector('.create-product');
const salesContainer = document.querySelector('.sales-container');

const modifyInputsModal = (_parent) => {
  modifyForm.children[0].innerHTML =
    'ID: ' + _parent.children[1].children[0].innerHTML;
  modifyForm.children[1].value = _parent.children[0].src;
  modifyForm.children[2].value = _parent.children[1].children[1].innerHTML;
  modifyForm.children[3].value = _parent.children[1].children[2].innerHTML;
  modifyForm.children[4].value =
    _parent.children[1].children[3].innerHTML.replace('$', '');
  modifyForm.children[5].value =
    _parent.children[1].children[4].innerHTML.replace('g', '');
};

const addFuncionalities = (_cards) => {
  const cards = Array.prototype.slice.call(_cards);
  for (let i = 0; i < cards.length; i++) {
    cards[i].children[2].addEventListener('click', () => {
      deleteProduct(cards[i].children[1].children[0].innerHTML);
      location.reload();
    });
    cards[i].children[1].children[5].addEventListener('click', () => {
      modifyForm.classList.remove('hidden-modal');
      modifyInputsModal(cards[i]);
    });
  }
};

const showProducts = async () => {
  const container = document.querySelector('.card-container');
  const products = await getProducts();
  if (products.length === undefined) {
    container.appendChild(createAdminCard(products[0]));
  } else {
    for (let i = 0; i < products.length; i++) {
      container.appendChild(createAdminCard(products[i]));
    }
  }
  addFuncionalities(document.querySelectorAll('.card'));
};

const showSales = async () => {
  try {
    const sales = await getSales();
    if (sales) {
      if (sales.length === 0) {
        salesContainer.appendChild(createSaleItem(sales[0]));
      } else if (sales.length > 0) {
        for (let i = 0; i < sales.length; i++) {
          salesContainer.appendChild(createSaleItem(sales[i]));
        }
      }
    }
  } catch (error) {
    console.error(error);
  }
};

document.querySelector('#cancel-modify').addEventListener('click', () => {
  modifyForm.classList.add('hidden-modal');
});

modifyForm.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const id = modifyForm.children[0].innerHTML.replace('ID: ', '');
    const data = {
      price: e.target.price.value,
      product: e.target.product.value,
      weight: e.target.weight.value,
      type: e.target.type.value,
      img: e.target.img.value,
    };
    await modifyProduct(id, data);
    location.reload();
  } catch (error) {
    console.error(error);
  }
});

document.getElementById('create').addEventListener('click', () => {
  createForm.classList.remove('hidden-modal');
});

document.getElementById('cancel-create').addEventListener('click', () => {
  createForm.classList.add('hidden-modal');
});

createForm.addEventListener('submit', async (e) => {
  try {
    e.preventDefault();
    const data = {
      price: e.target.price.value,
      product: e.target.product.value,
      weight: e.target.weight.value,
      type: e.target.type.value,
      img: e.target.img.value,
    };
    await createProduct(data);
    location.reload();
  } catch (error) {
    console.error(error);
  }
});

document.getElementById('sales').addEventListener('click', () => {
  salesContainer.classList.remove('hidden-modal');
  showSales();
});

document.querySelector('.close-sales-list').addEventListener('click', () => {
  salesContainer.classList.add('hidden-modal');
});

insertCommon();
links();
showProducts();
