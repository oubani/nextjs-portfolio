import CarouseItem from './CarouseItem';
import { projects, ProjectType } from '../../projects/projects';
import React, { Children, useEffect } from 'react';
import style from './Carousel.module.css';
import { useState } from 'react';

interface PropsCar {}

interface Props {
	project: ProjectType;
	width: string;
}

export const CarouselItem: React.FC<Props> = ({ project }) => {
	const { name, demoLink, image, desc, githubLink, tags } = project;

	return (
		<div className={`${style.carousel_item} `} style={{ width: '100%' }}>
			<div className='flex flex-col md:flex-row '>
				<div className='flex-1 p-4'>
					<img src={image} alt={name} />
				</div>
				<div className='flex-1 p-4'>
					<h1 className='text-xl mb-2'>{name} </h1>
					<p className='text-base md:text-base mb-2 '>{desc} </p>
					<div>
						{tags.map((tag) => (
							<span
								className={`${tag} px-2 text-center rounded-lg inline-block my-1 mr-2`}
								key={tag}>
								{' '}
								{tag}{' '}
							</span>
						))}
					</div>
					{githubLink && (
						<a href={githubLink} className=''>
							Visit
						</a>
					)}
					{demoLink && (
						<a href={demoLink} className=''>
							Visit
						</a>
					)}
				</div>
			</div>
		</div>
	);
};

const Carousel: React.FC<PropsCar> = ({ children }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	const updateIndex = (newIndex: number) => {
		if (newIndex < 0) {
			newIndex = React.Children.count(children) - 1;
		} else if (newIndex >= React.Children.count(children)) {
			newIndex = 0;
		}
		setActiveIndex(newIndex);
	};

	useEffect(() => {
		const interval = setInterval(() => {
			updateIndex(activeIndex + 1);
		}, 1500);
		return () => {
			if (interval) {
				clearInterval(interval);
			}
		};
	});

	return (
		<div
			className={`${style.carousel} py-4 rounded-lg shadow-2xl w-full bg-blue-400`}>
			<div
				className={`${style.inner} `}
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
				{React.Children.map(children, (child: any, index) => {
					return React.cloneElement(child, { width: '100%' });
				})}
			</div>
		</div>
	);
};
export default Carousel;
