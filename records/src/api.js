import axios from "axios";

const url = "http://localhost:5000";

export const fetchData = async () => {
  const response = await axios.get(`${url}/data`);
  return response.data;
};