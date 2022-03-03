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
		image: 'electroStore.jpg',
		desc: 'E-commerce web site built with react and laravel and strapy as payment method',
		demoLink: null,
		githubLink: 'https://github.com/oubani/e-commerce-Laravel-React',
		tags: ['laravel', 'react', 'redux', 'mysql'],
	},
	{
		name: 'Images Gallery',
		image: 'pixalab-01.jpg',
		desc: 'Displaying images from pixabay',
		demoLink: null,
		githubLink: 'https://github.com/oubani/images-gallery-',
		tags: ['react', 'tailwind'],
	},
	{
		name: 'YoussefLight',
		image: 'yousseflight.png',
		desc: 'Web site build for a client to show his work and his projects',
		demoLink: 'https://youssefmoumou.netlify.app/',
		githubLink: 'https://github.com/oubani/younnesLight',
		tags: ['tailwind'],
	},
	{
		name: 'Larave GraphQl Server',
		image: 'graphqlScreen.png',
		desc: 'GraphQl server built with laravel',
		demoLink: null,
		githubLink: 'https://github.com/oubani/laravel_graphQl',
		tags: ['laravel', 'graphQl'],
	},
	{
		name: 'Travel Blog ',
		image: 'travelBlog.jpg',
		desc: 'Travel blog built with react and vanilla css',
		demoLink: null,
		githubLink: 'https://github.com/oubani/Travel-blog-landing-page',
		tags: ['react'],
	},
	{
		name: 'SmartStore ',
		image: 'smartstore.jpg',
		desc: 'Ecommerce web site to sell electronique ',
		demoLink: null,
		githubLink: 'https://github.com/oubani/SmartStore',
		tags: ['laravel'],
	},
	{
		name: 'Speech to text ',
		image: 'speechtotext.jpeg',
		desc: 'Ecommerce web site to sell electronique ',
		demoLink: null,
		githubLink: 'https://github.com/oubani/speechtotext',
		tags: ['react'],
	},
	{
		name: 'Covid-19 cases tracking ',
		image: 'screen.jpg',
		desc: 'Ecommerce web site to sell electronique ',
		demoLink: null,
		githubLink: 'https://github.com/oubani/tafilalet-bureaux',
		tags: ['react'],
	},
];
