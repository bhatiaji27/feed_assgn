import axios from "axios";

export const getApiCall = async (url, headers, params) => {
  return await axios.get(url, {
    headers,
    params: params,
  });
};