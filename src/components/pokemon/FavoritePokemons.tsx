import { Grid } from '@nextui-org/react';
import { FC } from 'react';
import { FavoritePokemonCard } from './FavoritePokemonCard';

type FavoritePokemonsProps = {
  favorites: number[];
};

export const FavoritePokemons: FC<FavoritePokemonsProps> = ({ favorites }) => {
  return (
    <Grid.Container gap={2} justify='center'>
      {favorites.map((id) => (
        <FavoritePokemonCard pokeID={id} key={id} />
      ))}
    </Grid.Container>
  );
};
