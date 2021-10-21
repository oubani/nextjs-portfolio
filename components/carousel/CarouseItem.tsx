import { ProjectType } from '../../projects/projects';

interface Props {
	project: ProjectType;
}

const CarouseItem: React.FC<Props> = ({ project }) => {
	const { demoLink, desc, githubLink, image, name, tags } = project;

	return (
		<div className='flex justify-between flex-col md:flex-row bg-gray-400 p-2 '>
			<div className='flex-1 w-full'>
				<img src={image} alt={name} />
			</div>
			<div className='flex-1 item-start pl-2 md:pl-16 '>
				<h1 className='text-2xl md:text-3xl my-2 font-semibold '>{name} </h1>
				<p className='text-1xl md:text-2xl mb-2 '>{desc} </p>
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
	);
};
export default CarouseItem;
