import React from 'react';
import * as S from './styles';

import type { DogBreed } from '../../types/types';

type CardProps = {
	breed: DogBreed;
};

export const Card = (breed: CardProps) => {

    return  <S.Li key={breed.breed.name.name}>
        <S.StyledLink to={`/breed/${breed.breed.name.name}`}>
            <img alt='' src={breed.breed.imageLink} />
            <S.Title>{breed.breed.name.name}</S.Title>
        </S.StyledLink>
    </S.Li>
    
}