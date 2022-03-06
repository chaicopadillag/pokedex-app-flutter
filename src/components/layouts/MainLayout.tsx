import React, { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};

export const MainLayout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title ?? 'Pokemon GO'}</title>
        <meta name='autor' content='Dev Chaico' />
        <meta name='description' content='App de Pokemones' />
        <meta name='keywords' content='pickachu,pokemon,pokedex' />
      </Head>
      <Navbar />
      <main
        style={{
          padding: '0 1rem',
        }}
      >
        {children}
      </main>
    </>
  );
};
