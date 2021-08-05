import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeToggler from '../components/ThemeToggler';
import '../styles/globals.css';

import NavBar from '../components/NavBar';
import Script from 'next/script';
import { ApolloProvider } from '@apollo/client';
import client from '../helpclasses/apollo-client';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ApolloProvider client={client}>
        <Script src='https://code.iconify.design/1/1.0.6/iconify.min.js'></Script>
        <NavBar />
        <ThemeToggler />
        <main>
          <Component {...pageProps} />
        </main>
      </ApolloProvider>
    </>
  );
}
export default MyApp;
