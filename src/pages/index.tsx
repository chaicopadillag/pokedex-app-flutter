import { FC } from 'react';
import type { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react';
import { MainLayout } from '../components/layouts';
import { apiAxios } from '../api';
import { IPokemonsResponse, SmallPokemon } from '../interfaces/IPokemonsResponse';
import { PokemonCard } from '../components/pokemon';

type HomePageProps = {
  pokemons: SmallPokemon[];
};

const HomePage: NextPage<HomePageProps> = ({ pokemons }) => {
  return (
    <MainLayout title='Listado de Pokemons'>
      <Grid.Container gap={2} justify='center'>
        {pokemons.map((pokemon) => (
          <PokemonCard pokemon={pokemon} key={pokemon.name} />
        ))}
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await apiAxios.get<IPokemonsResponse>('/pokemon', {
    params: {
      limit: 151,
    },
  });

  const pokemons = data.results.map((pokemon, index) => ({
    ...pokemon,
    id: index + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${index + 1}.svg`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
