import { TerminalIcon } from '@heroicons/react/outline';
import styled from '../styles/Navbar.module.css';
import Link from 'next/link';

type Props = {
	onClick?: (s: string) => void;
};

const Logo: React.FC<Props> = () => {
	return (
		<Link href='/'>
			{/* className={`flex  items-center   ${styled.logo} `} */}
			<a className='font-bold text-2xl space-x-1 tracking-tight text-blue-500 whitespace-nowrap'>
				Oubani Ayoub
			</a>
		</Link>
	);
};
export default Logo;
