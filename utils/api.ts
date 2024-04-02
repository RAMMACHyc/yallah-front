import axios, { AxiosResponse } from 'axios';

const api = {
  async post<T>(url: string, data: any): Promise<AxiosResponse<T>> {
    return await axios.post(url, data);
  },

};

export default api;