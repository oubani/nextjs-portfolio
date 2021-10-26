// import Carousel, { CarouselItem } from './carousel/Carousel';
import { projects, ProjectType } from '../projects/projects';
import ProjectItemCard from './ProjectItemCard';
import Link from 'next/link';

interface Props {
	projects: ProjectType[];
}

const newProjectsArray: ProjectType[] = projects.map(
	(project: ProjectType, index: number) => {
		// if (index > 2) {
		// 	break;
		// } else
		return project;
	},
);

const Projects: React.FC<Props> = () => {
	return (
		<div className='space-y-10 mt-12 sm:mt-24 '>
			<h1 className='text-center text-3xl sm:text-4xl font-bold self-auto '>
				Projects
			</h1>
			<div className='py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
				{projects.map((project: ProjectType, index: number) => {
					if (index < 3) {
						return <ProjectItemCard key={project.name} project={project} />;
					}
				})}
			</div>
			<div className='text-center'>
				<Link href='/projects'>
					<a className='px-8 text-white bg-blue-500 py-2 rounded-md '>
						{' '}
						See More{' '}
					</a>
				</Link>
			</div>
		</div>
	);
};
export default Projects;
