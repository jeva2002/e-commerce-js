import { URL_SERVER } from './common.js';

export const getProducts = async (_options = '') => {
  try {
    const request = await (
      await fetch(URL_SERVER + 'products/' + _options)
    ).json();
    return request;
  } catch (error) {
    console.error(error);
  }
};

export const deleteProduct = async (_id) => {
  try {
    const request = await (
      await fetch(URL_SERVER + 'products/' + _id, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      })
    ).json();
    return request;
  } catch (error) {
    console.error(error);
  }
};

export const modifyProduct = async (_id, _data) => {
  try {
    const request = await (
      await fetch(URL_SERVER + 'products/' + _id, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(_data),
      })
    ).json();
    return request;
  } catch (error) {
    console.error(error);
  }
};

export const createProduct = async (_data) => {
  try {
    const request = await (
      await fetch(URL_SERVER + 'products/', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(_data),
      })
    ).json();
    return request;
  } catch (error) {
    console.error(error);
  }
};

export const getSales = async (_id) => {
  try {
    const request = await (await fetch(URL_SERVER + 'sales/')).json();
    return request;
  } catch (error) {
    console.error(error);
  }
};

export const createSale = async (_sale) => {
  try {
    const request = await (
      await fetch(URL_SERVER + 'sales', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(_sale),
      })
    ).json();
    return request;
  } catch (error) {
    console.error(error);
  }
};

export const getLocations = async () => {
  try {
    const locations = await (
      await fetch('http://localhost:3000/locations/1')
    ).json();
    return locations;
  } catch (e) {
    console.error(e);
  }
};
