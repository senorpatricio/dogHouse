import { resolve } from 'path';
import type { GatsbyNode } from 'gatsby';

type GraphQLResult = {
	allContentfulDogBreed: {
		edges: {
			node: {
				name: {
					name: string;
				}
				id: number;
			}
		}[];
	};
};

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions, reporter }) => {
	const { createPage } = actions;

	// Define a template for blog post
	const DogBreedEntry = resolve('./src/templates/breed-detail.tsx');

	const result = await graphql<GraphQLResult>(
		`
			{
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
		`
	);

	if (result.errors) {
		reporter.panicOnBuild(`There was an error loading your Contentful posts`, result.errors);
		return;
	}

	if (!result.data) {
		throw new Error('Failed to get posts.');
	}

	const breeds = result.data.allContentfulDogBreed.edges;

	if (breeds.length > 0) {

		breeds.forEach((breed, index) => {
			const previousDogBreed = index === 0 ? null : breeds[index - 1].node.name.name;
			const nextDogBreed = index === breeds.length - 1 ? null : breeds[index + 1].node.name.name;
			createPage({
				path: `/breed/${breed.node.name.name}/`,
				component: DogBreedEntry,
				context: {
					name: breed.node.name.name,
					previousDogBreed,
					nextDogBreed
				}
			});
		});
	}
};