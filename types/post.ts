export type PostType = {
	frontmatter: {
		title: string;
		date: string;
		cover_image: string;
		excerpt?: string;
	};
	content?: string | undefined;
	slug: string;
};
