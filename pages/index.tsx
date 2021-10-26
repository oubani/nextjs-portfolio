import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { projects } from '../projects/projects';

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
			<Hero />
			<Skills />
			<Projects projects={projects} />
		</>
	);
};

export default Home;
