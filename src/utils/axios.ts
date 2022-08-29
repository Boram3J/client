import axios, { AxiosRequestHeaders } from 'axios';

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const callRequest = async (url: string, method: string, data: any, headers: AxiosRequestHeaders) => {
  return await axios({ headers, method, url, data });
};
