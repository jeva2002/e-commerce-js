export const selectLocation = (_isIndex, _locations) => {
  const modal = document.createElement('form');
  modal.setAttribute('id', 'location-modal');
  modal.innerHTML = `
    <img class="remove-item" src=${
      _isIndex ? './src/imgs/cart/x.svg' : '../imgs/cart/x.svg'
    } alt="close-icon" id='close-modal' />
    <label for="department">Department</label>
    <select name="department" id="department">
      <option value="Antioquia">Antioquia</option>
    </select>
    <label for="municipality"> Municipality </label>
    <select name="municipality" id="municipality">
      <option value=''>Select municipality</option>
      ${_locations.map(
        (municipality) =>
          `<option value=${municipality}>${municipality}</option>`
      )}
    </select>
    <input type="submit" value="GUARDAR UBICACIÓN" id='submit-location'/>`;

  return modal;
};
