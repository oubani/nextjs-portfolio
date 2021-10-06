import { TerminalIcon } from '@heroicons/react/outline';
import styled from '../styles/Navbar.module.css';

interface Props {}

const Logo: React.FC<Props> = () => {
	return (
		<p className={`flex  items-center space-x-1 text-blue-500 ${styled.logo} `}>
			<span className='font-bold text-2xl tracking-tight whitespace-nowrap'>
				Oubani Ayoub
			</span>
		</p>
	);
};
export default Logo;
