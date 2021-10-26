import React from 'react';
import ProjectItemCard from '../components/ProjectItemCard';
import { projects, ProjectType } from '../projects/projects';

interface Props {}

const Projects: React.FC<Props> = () => {
	return (
		<div className='py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-10 '>
			{projects.map((project: ProjectType) => (
				<ProjectItemCard key={project.name} project={project} />
			))}
		</div>
	);
};
export default Projects;
