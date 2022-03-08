import React, { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
};
const origin = typeof window !== 'undefined' ? window.location.origin : '';
export const MainLayout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title?.toUpperCase() ?? 'Pokemon GO'}</title>
        <meta name='autor' content='Dev Chaico' />
        <meta name='description' content='App de Pokemones' />
        <meta name='keywords' content='pickachu,pokemon,pokedex' />

        <meta property='og:title' content={`Información sobre el pokemón ${title}`} />
        {/* <meta property='og:type' content='video.movie' /> */}
        <meta property='og:description' content={`Esta es la página sobre ${title}`} />
        <meta property='og:image' content={`${origin}/img/banner.png`} />
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
