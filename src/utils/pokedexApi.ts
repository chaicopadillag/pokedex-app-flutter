import { apiAxios } from '../api';
import { Pokemon } from '../interfaces/IPokemonResponse';

export const getPokemonByIdOrName = async (idName: string | number) => {
  try {
    const { data } = await apiAxios.get<Pokemon>(`/pokemon/${idName}`);
    return {
      id: data.id,
      name: data.name,
      sprites: data.sprites,
    };
  } catch (error) {
    return null;
  }
};
