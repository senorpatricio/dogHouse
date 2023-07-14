import React from 'react';
import { Link, graphql } from 'gatsby';
import type { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import * as S from './styles';
import { Container } from '../components/UI/Container';

import type { NextPrevious, DogBreed } from '../types/types';
import { Table } from '../components/Table';

type GraphQLResult = {
	contentfulDogBreed: DogBreed;
	next?: { name: NextPrevious };
	previous?: { name: NextPrevious };
};


const DogBreedTemplate = ({ data, location }: PageProps<GraphQLResult>) => {
	const breed = data.contentfulDogBreed;
	const { previous } = data;
	const { next } = data;
	
	return (
		<Layout location={location}>
			<Container>
				<S.Article>
					<S.Body>
						<h2>Breed: {breed.name.name}</h2>
						<img src={breed.imageLink}/>
						{breed.origin
						? <h3>Origin: <span>{breed.origin}</span></h3> 
						: <p>Origin: Not available</p>
						}
						<p>{breed.story.story}</p>
						<Table>
							<Table.Head>
								<Table.TR>
									<Table.TH> Attribute</Table.TH>
									<Table.TH> Value </Table.TH>
								</Table.TR>
							</Table.Head>
							<Table.Body>
								
							{  Object.entries(breed).map( (key ) => {
									if(typeof key[1] === 'object' || typeof key[1] === 'string') {
										return
									} else {
										return <Table.TR key={key[0]}>
											<Table.TD>{key[0]}</Table.TD>
											<Table.TD>{key[1]}</Table.TD>
										</Table.TR>
									}
								})
							
							}
							</Table.Body>
						</Table>
						
						
					</S.Body>

					{(previous || next) && (
						<S.Navigation>
							<ul>
								{previous && (
									<li>
										<Link to={`/breed/${previous.name?.name}`} rel='prev'>
											← {previous.name?.name}
										</Link>
									</li>
								)}
								{next && (
									<li>
										<Link to={`/breed/${next.name?.name}`} rel='next'>
											{next.name?.name} →
										</Link>
									</li>
								)}
							</ul>
						</S.Navigation>
					)}
				</S.Article>
			</Container>
		</Layout>
	);
};

export default DogBreedTemplate;

export const pageQuery = graphql`
	query DogBreedByName($name: String!, $nextDogBreed: String, $previousDogBreed: String) {
		contentfulDogBreed(name: {name: { eq: $name }}) {
			name {
			  name
			}
			barking
			coatLength
			drooling
			energy
			goodWithChildren
			goodWithOtherDogs
			goodWithStrangers
			grooming
			imageLink
			maxHeightMale
			maxWeightMale
			maxHeightFemale
			maxWeightFemale
			maxLifeExpentancy
			minWeightMale
			minHeightMale
			minHeightFemale
			minWeightFemale
			minLifeExpectancy
			playfulness
			protectiveness
			shedding
			trainability
			origin
			story { story }
		  }
		previous: contentfulDogBreed(name: {name: {eq: $previousDogBreed}}) {
			name {
				name
			}
			id
		  }
		next: contentfulDogBreed(name: {name: {eq: $nextDogBreed}}) {
			name {
			  name
			}
			id
		}
	}
  
`;