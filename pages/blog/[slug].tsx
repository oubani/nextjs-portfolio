import { PostType } from '../../types/post';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';
import matter from 'gray-matter';
import marked from 'marked';
import { GetStaticPaths, GetStaticProps } from 'next';
import '../../styles/bog.module.css';

interface Props {
	post: PostType;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const files = fs.readdirSync(path.join('posts'));

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.md', ''),
		},
	}));

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const markdownWithMeta = fs.readFileSync(
		path.join('posts', params?.slug + '.md'),
		'utf-8',
	);

	const { data: frontmatter, content } = matter(markdownWithMeta);

	return {
		props: {
			post: { slug: params?.slug, frontmatter, content },
		},
	};
};

const Index: React.FC<Props> = ({ post }) => {
	const { content, frontmatter } = post;
	const { cover_image, date, title } = frontmatter;

	return (
		<div>
			<Head>
				<title>Oubani Ayoub | Blog</title>
			</Head>
			<div className='mx-auto max-w-4xl'>
				<div className='mt-10'>
					<Link href='/blog'>
						<a className=' rounded text-white py-2 px-8 bg-blue-700'>Go Back</a>
					</Link>
					<h5 className='text-center mt-8 md:mt-16  font-bold text-2xl tracking-tight'>
						{title}
					</h5>
					<p className='text-center px-1 py-1  font-thin'> Posted on {date} </p>

					<Image
						className=' mt-8 w-full rounded-lg'
						src={cover_image}
						layout='responsive'
						width={3000}
						height='1700'
						alt={title}
					/>
					<div
						className={`text-xl md:text-2xl blog-body mt-8 `}
						dangerouslySetInnerHTML={{ __html: marked(content!) }}></div>
				</div>
			</div>
		</div>
	);
};
export default Index;

{
	/* <div className='bg-blue-900  py-3'>
				<div className=' w-full mb-5 mt-8'>
					
			</div>
					
			</div> */
}
