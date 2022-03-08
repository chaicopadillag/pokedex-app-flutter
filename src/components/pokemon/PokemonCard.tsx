import React, { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces/IPokemonsResponse';

export const PokemonCard: FC<{ pokemon: SmallPokemon }> = ({ pokemon: { id, img, name } }) => {
  const router = useRouter();

  const handleViewPokemon = () => {
    router.push(`/pokemon/${name}`);
  };

  return (
    <Grid xs={12} sm={6} md={3} xl={2} key={name} onClick={handleViewPokemon}>
      <Card hoverable clickable>
        <Card.Body css={{ p: 1 }}>
          <Card.Image objectFit='fill' src={img} width='100%' height={200} alt={name} />
        </Card.Body>
        <Card.Footer>
          <Row wrap='wrap' justify='space-between'>
            <Text b transform='capitalize'>
              {name}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
