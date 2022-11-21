export const createSaleItem = (_data) => {
  const item = document.createElement('div');
  item.classList.add('sale-item');
  item.innerHTML = `
    <div class="user-info">
      <h3 class="name">${_data.name}</h3>
      <h3 class="address">${_data.address}</h3>
      <h3 class="phone">${_data.phone}</h3>
      <h4>${_data.id}</h4>
    </div>
    <ul class="sale-list">
    </ul>
    <h3 class="total-bill">total</h3>
  `;

  if (_data.products.length === 0) {
    item.children[1].innerHTML += `<li>ID: ${_data.products[0].id} Amount: ${_data.products[0].amount}</li>`;
  } else if (_data.products.length > 0) {
    for (let i = 0; i < _data.products.length; i++) {
      item.children[1].innerHTML += `<li>ID: ${_data.products[i].id} Amount: ${_data.products[i].amount}</li>`;
    }
  }

  return item;
};
