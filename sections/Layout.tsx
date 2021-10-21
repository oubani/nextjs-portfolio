import React, { Children } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Navbar />
			<div className='p-7 md:p-10'></div>
			<main className='flex-grow container mx-auto px-4 md:px-6 '>
				{children}{' '}
			</main>
			<Footer />
		</div>
	);
};
export default Layout;
