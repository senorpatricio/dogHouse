import React from 'react';
import { graphql } from 'gatsby';
import type { PageProps } from 'gatsby';

// components
import ArticlePreview from '../components/CardGrid';
import Layout from '../components/Layout';

// types
import type { DogBreed } from '../types/types';

type GraphQLResult = {
	allContentfulDogBreed: {
		nodes: DogBreed[];
	};
};

const BreedIndex = ({ data, location }: PageProps<GraphQLResult>) => {
	const breeds = data.allContentfulDogBreed.nodes;

	return (
		<Layout location={location}>
			<ArticlePreview breeds={breeds} />
		</Layout>
	);
};

export default BreedIndex;

export const pageQuery = graphql`
query AllDogBreeds {
	allContentfulDogBreed {
	  edges {
		node {
		  id
		  name {
			name
		  }
		}
	  }
	}
  }
`;