import { GetStaticProps } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Head from 'next/head';
import { PostType } from '../../types/post';
import Post from '../../components/Post';
interface Props {
	posts: PostType[];
}

export const getStaticProps: GetStaticProps = async () => {
	// Get files from the posts dir
	const files = fs.readdirSync(path.join('posts'));

	// Get slug and frontmatter from posts
	const posts = files.map((filename) => {
		// Create slug
		const slug = filename.replace('.md', '');

		// Get frontmatter
		const markdownWithMeta = fs.readFileSync(
			path.join('posts', filename),
			'utf-8',
		);

		const { data: frontmatter } = matter(markdownWithMeta);

		return {
			slug,
			frontmatter,
		};
	});

	return {
		props: {
			posts,
		},
	};
};

const Blog: React.FC<Props> = ({ posts }) => {
	return (
		<div>
			<Head>
				<title>Oubani Ayoub | Blog</title>
			</Head>
			<div className='mx-auto max-w-4xl'>
				<h1 className='text-4xl font-bold py-12'>Racent Posts : </h1>
				<div className=''>
					{posts.map((post: PostType) => (
						<Post key={post.slug} post={post} />
					))}
				</div>
			</div>
		</div>
	);
};
export default Blog;
