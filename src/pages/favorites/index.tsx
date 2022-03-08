import { Container, Image, Text, Grid, Card } from '@nextui-org/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { MainLayout } from '../../components/layouts';
import { NoFavorites } from '../../components/ui';

const FavoritesPage = () => {
  const router = useRouter();
  const [favorites, setFavorites] = useState<number[]>([]);

  const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') ?? '[]');
  };

  const handleViewDetail = (id: number) => {
    router.push(`/pokemon/${id}`);
  };

  useEffect(() => {
    setFavorites(pokemons());
  }, []);

  return (
    <MainLayout title='Mis favoritos'>
      {favorites.length === 0 ? (
        <NoFavorites />
      ) : (
        <Grid.Container gap={2} justify='center'>
          {favorites.map((id) => (
            <Grid xs={12} sm={6} md={3} xl={2} key={id}>
              <Card hoverable clickable onClick={() => handleViewDetail(id)}>
                <Card.Body css={{ p: 1 }}>
                  <Card.Image
                    objectFit='fill'
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                    width='100%'
                    height={200}
                    alt='Sin Foto'
                  />
                </Card.Body>
                <Card.Footer></Card.Footer>
              </Card>
            </Grid>
          ))}
        </Grid.Container>
      )}
    </MainLayout>
  );
};

export default FavoritesPage;
