import 'bootstrap/dist/css/bootstrap.css';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import { ShopContextProvider } from '../context/shopContext';
import { AppProvider } from '../components/AppContext';
import {  SessionProvider, useSession, signIn } from 'next-auth/react';

export default function MyApp({ 
  Component, 
  pageProps: { session, ...pageProps }, 
}) {

  const [queryClient] = useState(() => new QueryClient());

  return (
		<SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <ShopContextProvider>
          <AppProvider>
            {Component.auth ? (
              <Auth>
                <Component {...pageProps} />
              </Auth>
            ) : (
              <Component {...pageProps} />
            )}
          </AppProvider>
        </ShopContextProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </SessionProvider >
  );
}

function Auth({ children }) {
  const { data: session, status, loading } = useSession({required: true})
  const isUser = !!session?.user 
  React.useEffect(() => {
      if (loading) return 
      if (!isUser) signIn()
  }, [isUser, loading])

  if (isUser) {
    return children
  }
  return <div>Loading...</div>
}


