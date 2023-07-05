
export type DogBreed = {
	name: {name: string};
	barking: number
    coatLength: number
    drooling: number
    energy: number
    goodWithChildren: number
    goodWithOtherDogs: number
    goodWithStrangers: number
    grooming: number
    imageLink: string
    maxHeightMale: number
    maxWeightMale: number
    maxHeightFemale: number
    maxWeightFemale: number
    maxLifeExpentancy: number
    minWeightMale: number
    minHeightMale: number
    minHeightFemale: number
    minWeightFemale: number
    minLifeExpectancy: number
    playfulness: number
    protectiveness: number
    shedding: number
    trainability: number
	origin: string
	story: {story: string}
	previous?: DogBreed
	next?: DogBreed
};

// export type SingleBlogPost = {
// 	author: {
// 		name: string;
// 	};
// 	body: {
// 		childMarkdownRemark: {
// 			html: string;
// 			timeToRead: number;
// 		};
// 	};
// 	description: {
// 		childMarkdownRemark: {
// 			excerpt: string;
// 		};
// 	};
// 	heroImage: {
// 		gatsbyImageData: IGatsbyImageData;
// 		resize: {
// 			src: string;
// 		};
// 	};
// 	publishDate: string;
// 	rawDate: string;
// 	slug: string;
// 	tags: string[];
// 	title: string;
// };

export type NextPrevious = { name: string } | null;