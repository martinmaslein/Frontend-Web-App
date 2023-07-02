import Axios from 'axios';
import { apiURL } from './utils/constantes';

const axiosAuthenticated = () => {
  return Axios.create({
    baseURL: apiURL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${sessionStorage.getItem('token')}`,
    },
  });
}

export default axiosAuthenticated;