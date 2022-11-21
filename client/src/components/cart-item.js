export const createCartItem = (_data, _amount = 1) => {
  const itemCard = document.createElement('div');
  itemCard.classList.add('item-cart');
  itemCard.innerHTML = `
  <b>${_data.id}</b>
  <img src=${_data.img} alt=${_data.product}/>
  <div class="item-cart-info">
    <h3 class="name">${_data.product}</h3>
    <h4 class="weight">${_data.weight}g</h4>
  </div>
  <div class="item-cart-price-info">
    <h4>Price</h4>
    <h3 class="price">$${_data.price}</h3>
  </div>
  <form class="buttons-container">
    <h4>Quantity</h4>
    <div class="buttons">
      <input type="button" value="-" />
      <h3 class="amount-item">${_amount}</h3>
      <input type="button" value="+" />
    </div>
  </form>
  <div class="total-item">
    <h4>Total</h4>
    <h3 class="total-price">
    $${(_amount * parseFloat(_data.price)).toFixed(2)}
    </h3>
  </div>
  <div class="actions">
    <h4>Action</h4>
    <h3 class="save">Save for later</h3>
    <h3 class="remove">Remove</h3>
  </div>
  `;

  return itemCard;
};
