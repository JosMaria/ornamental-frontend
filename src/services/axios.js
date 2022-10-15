import axios from 'axios';

const URL_LOCALHOST = 'http://localhost:8080/';

const domain = axios.create({
  baseURL: URL_LOCALHOST
});

const fetchAllIdentifications = async () => {
  const response = await domain.get(`api/v1/ornamental_plants/identifications`);
  return response.data;
};

export { fetchAllIdentifications }
