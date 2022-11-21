import { URL_SERVER } from './common.js';

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
