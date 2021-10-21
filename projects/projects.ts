export type ProjectType = {
	image: string;
	name: string;
	desc: string;
	tags: string[];
	githubLink: string | null;
	demoLink: string | null;
};
export const projects: ProjectType[] = [
	{
		name: 'Laravel react ecommerce',
		image: 'https://www.oubaniayoub.me/images/searchrecipe.jpg',
		desc: 'E-commerce web site built with react and laravel and strapy as payment method',
		demoLink: null,
		githubLink: null,
		tags: ['laravel', 'react', 'redux', 'mysql'],
	},
	{
		name: 'Search Recipes App',
		image: 'https://www.oubaniayoub.me/images/searchrecipe.jpg',
		desc: 'website built using react for searching for recipes using edamam api',
		demoLink: null,
		githubLink: null,
		tags: ['react'],
	},
	{
		name: 'Search Recipes App',
		image: 'https://www.oubaniayoub.me/images/searchrecipe.jpg',
		desc: 'website built using react for searching for recipes using edamam api',
		demoLink: null,
		githubLink: null,
		tags: ['react'],
	},
];
