interface Props {}

const Footer: React.FC<Props> = () => {
	return (
		<div className='px-4 sm:px-6 py-60 mt-24  '>
			<p className='text-center text-sm text-gray-500'>
				{new Date().getFullYear()} AlterClasse. All rights reserved.
			</p>
		</div>
	);
};
export default Footer;
