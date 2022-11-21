import { URL_SERVER } from './common.js';

export const getProducts = async (_options = '') => {
  const request = await (
    await fetch(URL_SERVER + 'products/' + _options)
  ).json();
  return request;
};
