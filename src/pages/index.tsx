import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

// components
import CardGrid from '../components/CardGrid';
import Layout from '../components/Layout';

// types
import type { DogBreed } from '../types/types';

type GraphQLResult = {
	allContentfulDogBreed: {
		nodes: DogBreed[];
	};
};

const Home = ({ data, location }: PageProps<GraphQLResult>) => {
	const breeds = data.allContentfulDogBreed.nodes;

	return (
		<Layout location={location}>
			<CardGrid breeds={breeds} />
		</Layout>
	);
};

export default Home;

export const pageQuery = graphql`
query FindAllDogBreeds {
	allContentfulDogBreed {
	  nodes {
		name {
		  name
		}
		imageLink
		id
	  }
	}
  }
`;
