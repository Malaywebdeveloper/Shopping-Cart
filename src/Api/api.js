import axios from "axios";

const BASE_URL = "https://fakestoreapi.com/products";

export const getProduct = async () => {
  return await axios.get(BASE_URL);
};

export const getSingleProduct = async (id) => {
  return await axios.get(`${BASE_URL}/${id}`);
};