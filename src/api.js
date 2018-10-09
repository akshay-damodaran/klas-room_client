/* global URL */

import axios from 'axios';

export const getApi = async (url, params) => {
  const source = new URL(url);
  if (params) { Object.keys(params).forEach(key => source.searchParams.append(key, params[key])); }
  try {
    const response = await axios.get(source);
    return {
      isError: false,
      response,
    };
  } catch (e) {
    console.error('Error in api call', e);
    return {
      isError: true,
    };
  }
};

export const postApi = async (url, params) => {
  const source = new URL(url);
  try {
    const response = await axios.post(source, params);
    return {
      isError: false,
      response,
    };
  } catch (e) {
    console.error('Error in api call', e);
    return {
      isError: true,
    };
  }
};
