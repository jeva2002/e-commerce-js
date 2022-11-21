export const createCard = (_data, _isIndex = false) => {
  const card = document.createElement('div');
  card.classList.add('card');
  card.innerHTML = `
    <img
      src="${_data.img}"
      alt="${_data.product}"
    />
    <div class="info">
      <h3>${_data.product}</h3>
      <h4>${_data.type}</h4>
      <h3 id="price">$${_data.price}</h3>
      <h5>${_data.weight}g</h5>
      <div class="toCart">
        <button id="minus" class="minus">-</button>
        <h5 class="amount">Add</h5>
        <button id="plus" class="plus">+</button>
      </div>
      <b>${_data.id}</b> 
    </div>
    <img class="heart" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATpJREFUSEvFleFRwzAMhb9OQEeACYAJChuwAXQCGIVOUNiADYANYAIYASYo93JSTnWd2PFdiv+ksaL39J5kd8HMazEzPv9GcAPcAhem8BvYAC/2rvg9cGrvH8BziPfGpAqWwBYQQG692ebVQFwFrIEfj6cEquQc+AUegAj4CJxYosf1vZaUelx7lzmCO6teyZLeV2EfS10kzMVlpYqQiiflRQVKXsVgw4R5ke9AZ2Mk2BngGaBKWpaUf1lih31Ugtktcv/UPNmUNrFkmYZA9uiZbbIAfEz1vJ5AItBXG9fPcEAPrgofRZ2FWpIUXNMzeNCkYgrJKHg6RdHjGpIi+BhBSUkVeIlgiET7saF7nqejVvN/kNrll5umZRS8RoEXFEm0VwU+hSDapd/FynPXdemkNsVretAEfDQFf3ZDVxl/VBnpAAAAAElFTkSuQmCC"/>
  `;

  return card;
};
