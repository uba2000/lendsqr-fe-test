import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import Router from "./navigation/router"

const queryConfig = {
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Disable refetching on window focus
      retry: 0, // Number of retries before failing the query
    },
  },
};

const queryClient = new QueryClient(queryConfig);

function App() {

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </>
  )
}

export default App
