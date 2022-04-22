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
		<SessionProvider session={pageProps.session}>

      <QueryClientProvider client={queryClient}>
        <ShopContextProvider>
          <Component {...pageProps}></Component>
        </ShopContextProvider>
        <ReactQueryDevtools initialIsOpen />
      </QueryClientProvider>
    </SessionProvider >
  );
}

// function Auth({ children }) {
//   // if `{ required: true }` is supplied, `status` can only be "loading" or "authenticated"
//   const { status } = useSession({ required: true })

//   if (status === 'loading') {
//     return <div>Loading...</div>
//   }
  
//   return children
// }


