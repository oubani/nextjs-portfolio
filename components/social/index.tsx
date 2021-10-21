import React from 'react';
import github from './icons/github.svg';
import linkedin from './icons/linkedin.svg';
import twitter from './icons/twitter.svg';
import Image from 'next/image';

interface Props {}

const SocialContact: React.FC<Props> = () => {
	return (
		<div className='flex gap-4'>
			<a
				href='https://twitter.com/AyoubOubani'
				target='_blank'
				rel='noopener noreferrer'>
				<i className='icon  ion-logo-twitter text-7xl '></i>
			</a>
			<a
				href='https://www.linkedin.com/in/oubani-ayoub-6b62401b4/'
				target='_blank'
				rel='noopener noreferrer'>
				<i className='icon  ion-logo-linkedin text-7xl '></i>
			</a>

			<a
				href='https://github.com/oubani'
				target='_blank'
				rel='noopener noreferrer'>
				<i className='icon  ion-logo-github text-7xl '></i>
			</a>
		</div>
	);
};
export default SocialContact;
