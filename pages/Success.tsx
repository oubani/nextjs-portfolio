import React from 'react';
import Link from 'next/link';

interface Props {}

const Success: React.FC<Props> = () => {
	return (
		<div className='container mx-auto py-16 h-full flex flex-col justify-center items-center space-y-12'>
			<div className='text-center space-y-6'>
				<h1 className='text-3xl sm:text-6xl'>Form successfully submitted!</h1>

				<p className='text-x'>
					Thank you contact me, I{"'"}ll reach you as soon as possible
				</p>
			</div>
			<Link href='/'>
				<a className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3  rounded-md text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap'>
					Go back home
				</a>
			</Link>
		</div>
	);
};
export default Success;
