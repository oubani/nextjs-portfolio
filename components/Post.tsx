import { PostType } from '../types/post';
import Image from 'next/image';
import Link from 'next/link';
interface Props {
	post: PostType;
}

const Post: React.FC<Props> = ({ post }) => {
	const { title, date, cover_image, excerpt } = post.frontmatter;

	return (
		<div className='bg-white dark:bg-gray-700 shadow-lg rounded-lg w-full mb-5  '>
			<Link href={`/blog/${post.slug}`}>
				<a>
					<img className='rounded-t-lg' src={cover_image} alt={title} />
				</a>
			</Link>
			<div className='px-5 pb-4 pt-3'>
				<p className='px-1 py-1  font-thin'> Posted on {date} </p>
				<Link href={`/blog/${post.slug}`}>
					<a>
						<h5 className=' font-bold text-2xl tracking-tight mb-2'>{title}</h5>
					</a>
				</Link>
				<p className='font-normal  mb-3'>{excerpt} </p>
				<Link href={`/blog/${post.slug}`}>
					<a className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center'>
						Read More
					</a>
				</Link>
			</div>
		</div>
	);
};
export default Post;
