export const createItemCartNav = (_data, _amount, _isIndex) => {
  const item = document.createElement('div');
  item.setAttribute('id', 'item');
  item.innerHTML = `
    <div class="item">
      <img class="img-item" src=${_data.img} alt="" />
      <div class="item-info">
        <h3>${_data.product}</h3>
        <h4>${_amount} x <span class="price"> $${_data.price}</span></h4>
        <img src=${
          _isIndex ? './src/imgs/cart/x.svg' : '../imgs/cart/x.svg'
        } alt="Cerrar item" class="remove"/>
        <b>${_data.id}</b>
      </div>
    </div>
  `;

  return item;
};
