import { useEffect, useState } from 'react';
import { MainLayout } from '../../components/layouts';
import { FavoritePokemons } from '../../components/pokemon';
import { NoFavorites } from '../../components/ui';

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const pokemons = (): number[] => {
    return JSON.parse(localStorage.getItem('favorites') ?? '[]');
  };

  useEffect(() => {
    setFavorites(pokemons());
  }, []);

  return <MainLayout title='Mis favoritos'>{favorites.length === 0 ? <NoFavorites /> : <FavoritePokemons favorites={favorites} />}</MainLayout>;
};

export default FavoritesPage;
