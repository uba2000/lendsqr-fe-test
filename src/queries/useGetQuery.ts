/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery, useQueryClient } from '@tanstack/react-query';

type Props = {
  apiService: (payload?: any) => Promise<any>;
  enabled?: boolean;
  payload?: any;
  queryKey: string | string[];
};

export const useGetQuery = (props: Props) => {
  const { apiService, enabled, payload, queryKey } = props;

  const queryClient = useQueryClient();

  const fetchData = async () => {
    try {
      return payload ? await apiService(payload) : await apiService();
    } catch (error: any) {
      // Listen for error events
      console.log('unable to fetch data', error);
    }
  };

  const { data, error, isError, isPending, isSuccess, refetch } =
    useQuery({
      enabled,
      queryKey: [queryKey],
      queryFn: fetchData,
    });

  // Trigger refetch when external state changes
  const triggerRefetch = () => refetch();

  // Clear cache for current query
  const clearCache = () =>
    queryClient.invalidateQueries(props.queryKey as any);

  return {
    data,
    error,
    isError,
    isPending,
    isSuccess,
    triggerRefetch,
    clearCache,
  };
};

export default useGetQuery;
