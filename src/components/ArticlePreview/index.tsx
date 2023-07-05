import React from 'react';

// components

// styled components
import * as S from './styles';
import { Container } from '../UI/Container';

// types
import type { DogBreed } from '../../types/types';

// props
type ArticlePreviewProps = {
	breeds: DogBreed[];
};

const ArticlePreview = ({ breeds }: ArticlePreviewProps) => {
	if (!breeds || !Array.isArray(breeds)) return null;
	console.log('Breeds: ', breeds)
	return (
		<Container>
			<S.ArticleList>
				{breeds.map((breed) => (
					<li key={breed.name.name}>
						<S.StyledLink to={`/breed/${breed.name.name}`}>
							<img alt='' src={breed.imageLink} />
							<S.Title>{breed.name.name}</S.Title>
						</S.StyledLink>
					</li>
				))}
			</S.ArticleList>
		</Container>
	);
};

export default ArticlePreview;