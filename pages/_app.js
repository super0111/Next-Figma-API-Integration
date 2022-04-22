import 'bootstrap/dist/css/bootstrap.css';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useState } from 'react';
import { ShopContextProvider } from '../context/shopContext';
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
        {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
        </ShopContextProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </SessionProvider >
  );
}

function Auth({ children }) {
  const { data: session, status, loading } = useSession({required: true})
  const isUser = !!session?.user 
  console.log(session)// -> undefined in server- but correct in client-console
  React.useEffect(() => {
      if (loading) return   // Do nothing while loading
      if (!isUser) signIn()
  }, [isUser, loading])

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}


