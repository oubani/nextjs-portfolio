import Image from 'next/image';
import skill from './skill.svg';
// languages known
import html from './skills-icons/languages-known/html.svg';
import css from './skills-icons/languages-known/css.svg';
import php from './skills-icons/languages-known/php.svg';
import typescript from './skills-icons/languages-known/typescript.svg';
import javascript from './skills-icons/languages-known/javascript.svg';
// frontEnd
import bootstrap from './skills-icons/frontend/bootstrap.svg';
import react from './skills-icons/frontend/react.svg';
import vue from './skills-icons/frontend/vue.svg';
import next from './skills-icons/frontend/next.svg';
import nuxt from './skills-icons/frontend/nuxt.svg';
import tailwind from './skills-icons/frontend/tailwind.svg';
import redux from './skills-icons/frontend/redux.svg';
// backend & techs
import express from './skills-icons/Backend&techs/express.svg';
import git from './skills-icons/Backend&techs/git.svg';
import github from './skills-icons/Backend&techs/github.svg';
import laravel from './skills-icons/Backend&techs/laravel.svg';
import mongodb from './skills-icons/Backend&techs/mongodb.svg';
import mysql from './skills-icons/Backend&techs/mysql.svg';

interface Props {}

const Skills: React.FC<Props> = () => {
	const Html = require('./skills-icons/languages-known/html.svg');
	const width: number = 60;
	const height: number = 60;
	return (
		<div className='space-y-10 mt-12 sm:mt-24 pt-12'>
			<h1 className='text-center text-3xl sm:text-4xl font-bold self-auto '>
				Skills
			</h1>
			<div className='flex flex-col md:flex-row justify-between items-center py-8'>
				<div className='flex-1 z-0'>
					<Image src={skill} alt='Landscape picture' />
				</div>
				<div className='flex-1 pt-8 md:pt-0  md:pl-12'>
					<div className='mb-4'>
						<h2 className='text-center md:text-right text-2xl'>
							Languages known
						</h2>
						<div className='flex gap-4 mt-2'>
							<Image src={html} width={width} height={height} alt='html' />
							<Image src={css} width={width} height={height} alt='html' />
							<Image src={php} width={width} height={height} alt='html' />
							<Image
								src={javascript}
								width={width}
								height={height}
								alt='html'
							/>
							<Image
								src={typescript}
								width={width}
								height={height}
								alt='html'
							/>
						</div>
					</div>
					<div className='mb-4'>
						<h2 className='text-center md:text-right text-2xl'>Frontend</h2>
						<div className='flex gap-4 mt-2'>
							<Image src={react} width={width} height={height} alt='html' />
							<Image src={next} width={width} height={height} alt='html' />
							<Image src={tailwind} width={width} height={height} alt='html' />
							<Image src={bootstrap} width={width} height={height} alt='html' />
							<Image src={vue} width={width} height={height} alt='html' />
							<Image src={nuxt} width={width} height={height} alt='html' />
						</div>
					</div>
					<div className='mb-4'>
						<h2 className='text-center md:text-right text-2xl'>
							Backend, Databases and techs
						</h2>
						<div className='flex gap-4 mt-2'>
							<Image src={laravel} width={width} height={height} alt='html' />
							<Image src={mysql} width={width} height={height} alt='html' />
							<Image src={express} width={width} height={height} alt='html' />
							<Image src={mongodb} width={width} height={height} alt='html' />
							<Image src={git} width={width} height={height} alt='html' />
							<Image src={github} width={width} height={height} alt='html' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Skills;
