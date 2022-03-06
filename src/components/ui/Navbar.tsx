import { Button, Image, Link, Spacer, Text, useTheme } from '@nextui-org/react';
import NextLink from 'next/link';
import React from 'react';

export const Navbar = () => {
  const { theme } = useTheme();
  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 1rem',
        backgroundColor: theme?.colors.gray900.value,
      }}
    >
      <Image src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png' alt='Pokémon' width='70' height='70' />
      <NextLink href='/' passHref>
        <Link>
          <Text color='white' h2>
            P
          </Text>
          <Text color='white' h3>
            okémon
          </Text>
        </Link>
      </NextLink>
      <Spacer
        css={{
          flexGrow: 1,
        }}
      />
      <NextLink href='/favorites' passHref>
        <Link>
          <Text color='white'>Favoritos</Text>
        </Link>
      </NextLink>
    </div>
  );
};
