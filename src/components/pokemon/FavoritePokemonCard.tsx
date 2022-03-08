import { Card, Grid } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { FC } from 'react';

type FavoritePokemonCardProps = {
  pokeID: number;
};

export const FavoritePokemonCard: FC<FavoritePokemonCardProps> = ({ pokeID }) => {
  const router = useRouter();

  const handleViewDetail = () => {
    router.push(`/pokemon-by-id/${pokeID}`);
  };

  return (
    <Grid xs={12} sm={6} md={3} xl={2} key={pokeID}>
      <Card hoverable clickable onClick={handleViewDetail}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image
            objectFit='fill'
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokeID}.svg`}
            width='100%'
            height={200}
            alt='Sin Foto'
          />
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    </Grid>
  );
};
