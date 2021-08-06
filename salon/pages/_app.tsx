import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import ThemeToggler from '../components/ThemeToggler';
import NavBar from '../components/NavBar';
import Script from 'next/script';
import { ApolloProvider } from '@apollo/client';
import client from '../helpclasses/apollo-client';
import { MeContext } from '../helpclasses/contexts';
import React, { useState } from 'react';
import DataLoader from '../helpclasses/DataLoader';
import { Me } from '../helpclasses/interfaces';

function MyApp({ Component, pageProps }: AppProps) {
  const [me, setMe] = useState<Me | null>(null);

  return (
    <>
      <ApolloProvider client={client}>
        <DataLoader setMe={setMe} />
        <MeContext.Provider value={me}>
          <Script src='https://code.iconify.design/1/1.0.6/iconify.min.js'></Script>
          <NavBar />
          <ThemeToggler />
          <main>
            <Component {...pageProps} />
          </main>
        </MeContext.Provider>
      </ApolloProvider>
    </>
  );
}
export default MyApp;
