import axios from 'axios';

import { API_URL } from 'Constants/UrlConstants';

const getRequest = (url, query) => axios({
  method: 'GET',
  url: `${API_URL}/${url}`,
  params: query
});

const deleteRequest = (url, query) => axios({
  method: 'DELETE',
  url: `${API_URL}/${url}`,
  params: query
});

const postRequest = (url, body) => axios({
  method: 'POST',
  url: `${API_URL}/${url}`,
  data: body
});

export { getRequest, deleteRequest, postRequest };
