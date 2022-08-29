import axis from 'axios';

export const callApi = async (url: string, method: string, data: any) => {
  const response = await axis({
    method,
    url,
    data,
  });

  return response;
};
