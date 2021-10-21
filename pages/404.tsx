import Link from 'next/link';

const NotFound = () => {
	return (
		<>
			<div className='container mx-auto py-16 h-full flex flex-col justify-center items-center space-y-12'>
				<div className='text-center space-y-6'>
					<h1 className='text-3xl sm:text-6xl'>404 - Page not found</h1>
					<p className='text-x'>We can t find the page you are looking for .</p>
				</div>
				<Link href='/'>
					<a className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3  rounded-md text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap'>
						Go back home
					</a>
				</Link>
			</div>
		</>
	);
};
export default NotFound;
