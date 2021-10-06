import React, { Children } from 'react';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar';

interface Props {}

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div className='min-h-screen flex flex-col'>
			<Navbar />
			<main className='flex-grow container mx-auto px-4 sm:px-6 '>
				{children}{' '}
			</main>
			<Footer />
		</div>
	);
};
export default Layout;
