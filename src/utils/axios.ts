import axios, { AxiosRequestHeaders, ResponseType } from 'axios';

// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export const callRequest = async (
  url: string,
  method = 'get',
  data?: any,
  headers?: AxiosRequestHeaders,
  responseType: ResponseType | undefined = 'json',
) => {
  return await axios({ headers, method, url, data, responseType });
};
