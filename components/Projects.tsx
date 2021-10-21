// import Carousel, { CarouselItem } from './carousel/Carousel';
import { projects, ProjectType } from '../projects/projects';
import ProjectItemCard from './ProjectItemCard';

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
					if (index < 2) {
						return <ProjectItemCard key={project.name} project={project} />;
					}
				})}
			</div>
		</div>

		// Old project component
		// <div className='space-y-10 mt-12 sm:mt-24 '>
		// 	<h1 className='text-center text-3xl sm:text-4xl font-bold self-auto '>
		// 		Projects
		// 	</h1>
		// 	<div className='py-4'>
		// 		<Carousel key={'ef'}>
		// 			{projects.map((project) => (
		// 				<CarouselItem key={project.name} project={project} width='100%' />
		// 			))}
		// 		</Carousel>
		// 	</div>
		// </div>
	);
};
export default Projects;
