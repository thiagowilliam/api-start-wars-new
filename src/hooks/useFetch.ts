import useSWR from 'swr';
import api from '../services/api';

export function useAxiosResults<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const response = await api.get(url);

    return response.data.results;
  });

  return { data, error };
}

export function useAxiosData<Data = any, Error = any>(url: string) {
  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const response = await api.get(url);

    return response.data;
  });

  return { data, error };
}
