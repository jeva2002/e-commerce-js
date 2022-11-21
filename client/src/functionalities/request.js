import { URL_SERVER } from './common.js';

export const getProducts = async (_options = '') => {
  const request = await (
    await fetch(URL_SERVER + 'products/' + _options)
  ).json();
  return request;
};

export const deleteProduct = async (_id) => {
  const request = await (
    await fetch(URL_SERVER + 'products/' + _id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    })
  ).json();
  return request;
};

export const modifyProduct = async (_id, _data) => {
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
};

export const createProduct = async (_data) => {
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
};

export const createSale = async (_sale) => {
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
};
