import 'bootstrap/dist/css/bootstrap.css';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import { ShopContextProvider } from '../context/shopContext';

export default function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <ShopContextProvider>
        <Component {...pageProps} />
      </ShopContextProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
