import React, { FC, useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { apiAxios } from '../../api';
import { MainLayout } from '../../components/layouts';
import { Pokemon } from '../../interfaces/IPokemonResponse';

type PokemonPageProps = {
  pokemon: Pokemon;
};

const hasPokemonInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false;

  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') ?? '[]');

  return favorites.includes(id);
};

const PokemonByIDPage: FC<PokemonPageProps> = ({ pokemon }) => {
  const [isInFavorite, setIsInFavorite] = useState(hasPokemonInFavorites(pokemon.id));

  const handleToggleFavorite = () => {
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') ?? '[]');

    if (favorites.includes(pokemon.id)) {
      favorites.splice(favorites.indexOf(pokemon.id), 1);
    } else {
      favorites.push(pokemon.id);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsInFavorite(!isInFavorite);

    if (isInFavorite) return;

    confetti({
      zIndex: 100,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  };

  return (
    <MainLayout title={`Pokemon ${pokemon.name}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Body>
              <Card.Image objectFit='fill' src={pokemon.sprites.other?.dream_world.front_default || '/no-image.png'} width='100%' height={200} alt={pokemon.name} />
            </Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card hoverable css={{ padding: '30px' }}>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text b size={40} transform='capitalize'>
                {pokemon.name}
              </Text>
              <Button color='gradient' ghost={!isInFavorite} onClick={handleToggleFavorite}>
                {isInFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Stripes</Text>
              <Container>
                <Image src={pokemon.sprites.front_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_default} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.front_shiny} alt={pokemon.name} width={100} height={100} />
                <Image src={pokemon.sprites.back_shiny} alt={pokemon.name} width={100} height={100} />
              </Container>
            </Card.Body>
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const pokemons151 = [...Array(151)].map((_, index) => `${index + 1}`);

  return {
    paths: pokemons151.map((id) => ({ params: { id } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as { id: string };
  const { data } = await apiAxios.get<Pokemon>(`/pokemon/${id}`);

  const pokemon = {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };

  return {
    props: {
      pokemon,
    },
  };
};

export default PokemonByIDPage;
