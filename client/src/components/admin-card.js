export const createAdminCard = (_data) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
  <img src="${_data.img}" alt="${_data.product}" />
  <div class="info">
    <b id="id">${_data.id}</b>
    <h3>${_data.product}</h3>
    <h4>${_data.type}</h4>
    <h3 id="price">$${_data.price}</h3>
    <h5>${_data.weight}g</h5>
    <h4 class="modify-item">Modify Product</h4>
  </div>
  <img class="remove-item" src="../imgs/cart/x.svg" />
  `;

  return card;
};
