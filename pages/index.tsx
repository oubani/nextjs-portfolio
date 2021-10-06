import type { NextPage } from 'next';
import Head from 'next/head';
import Layout from '../sections/Layout';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Oubani Ayoub | fullstack web Freelancer </title>
				<meta
					name='description'
					content='Oubani ayoub, I web designer and fullstack web developer, Freelancer '
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<section className='flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32 '>
					<div className='space-y-4 max-w-4xl mx-auto text-center'></div>
					<h1 className='text-4xl sm:text-7xl font-bold  capitalize'>
						<span className='block'>The blogging patform </span>
						<span className='block'>for developers</span>
					</h1>
					<h2 className='text-xl sm:text-2xl'>
						{' '}
						Start your developer blog, share ideas, and connect with dev
						community!{' '}
					</h2>
					<button className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-2 border-blue-600 hover:border-blue-700 text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap '>
						Start your blog for free
					</button>
				</section>
			</Layout>
		</>
	);
};

export default Home;
