import axiosInstance from '../utils/util-axios';

export const getUsers = async () => {
  const url = '49359cad-1020-4265-9ed1-e17118285de4';
  const response = await axiosInstance.get(url);
  return response.data;
};

export const getUsersSummaryData = async () => {
  const url = 'e7e457ca-c4e2-4854-88eb-ad958e293f05';
  const response = await axiosInstance.get(url);
  return response.data.data;
};
