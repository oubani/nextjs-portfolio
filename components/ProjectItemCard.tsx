import React from 'react';
import { ProjectType } from '../projects/projects';
import { EyeIcon, EyeOffIcon } from '@heroicons/react/solid';

interface Props {
	project: ProjectType;
}

const ProjectItemCard: React.FC<Props> = ({ project }) => {
	const { name, demoLink, desc, image, githubLink, tags } = project;

	return (
		<div className='shadow-2xl '>
			<div className='px-4 py-2'>
				<h1 className='text-2xl font-medium  dark:text-white text-gray-600'>
					{name}
				</h1>
			</div>
			<div>
				<img src={`/images/projects/${image}`} alt={name} className='w-full' />
			</div>
			<div className='px-6 py-4  ' style={{ borderBottom: '1px solid gray' }}>
				{tags.map((tag: string) => (
					<span
						className={`${tag} px-2 text-center rounded-lg inline-block my-1 mr-2`}
						key={tag}>
						{' '}
						{tag}{' '}
					</span>
				))}
			</div>
			<div className='text-center flex justify-around py-4'>
				<div className='  flex-1 border-r-2 border-gray-600 '>
					{demoLink ? (
						<a
							href={demoLink!}
							className='cursor-pointer transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 '
							target='_blank'
							rel='noopener noreferrer'>
							{/* <EyeIcon /> */}
							<i className='ion-md-eye text-2xl'></i>
						</a>
					) : (
						// <EyeOffIcon className='text-2xl'  />
						<i className='ion-md-eye-off cursor-not-allowed text-2xl'></i>
					)}
				</div>
				<div className='  flex-1'>
					{githubLink ? (
						<a
							href={githubLink!}
							className='cursor-pointer'
							target='_blank'
							rel='noopener noreferrer'>
							<i className='ion-logo-github text-2xl'></i>
						</a>
					) : (
						<i className='ion-logo-github text-2xl cursor-not-allowed'></i>
					)}
				</div>
			</div>
		</div>
	);
};
export default ProjectItemCard;
