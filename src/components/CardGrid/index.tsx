import React from 'react';
import * as S from './styles';
import { Container } from '../UI/Container';

import type { DogBreed } from '../../types/types';
import { Card } from '../Card';

type GridProps = {
	breeds: DogBreed[];
};

const CardGrid = ({ breeds }: GridProps) => {
	if (!breeds || !Array.isArray(breeds)) return null;
	return (
		<Container>
			<S.Grid>
				{breeds.map((breed) => (
					<Card breed={breed}></Card>
				))}
			</S.Grid>
		</Container>
	);
};

export default CardGrid;