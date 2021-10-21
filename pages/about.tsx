import React from 'react';
import Head from 'next/head';
import SocialContact from '../components/social';

interface Props {}

const about: React.FC<Props> = () => {
	return (
		<div>
			<Head>
				<title>Oubani Ayoub | About me</title>
			</Head>
			<section className='py-8 md:py-20'>
				<div className=' border-l-4 py-6 px-4 rounded-lg border-black '>
					<h1 className='text-4xl mb-2'>Hi, I{"'"}am Oubani Ayoub </h1>
					<p className='text-2xl'>
						I{"'"}am full-stack web developer graduated with a Higher
						Technician&apos;s Certificate in Multimedia and Web Design. And a
						Bachelor degree of Science and techniques option Software
						Engineering, I am very flexible and adaptive to learn new things. I
						am sure I will be able to contribute something capable for the
						growth of the company.
					</p>
					<h3 className='mt-6 text-xl'>Personal information :</h3>
					<div className='mt-2 pl-6 text-xl'>
						<p className='flex items-center mb-2'>
							{/* <PhoneIcon width={25} /> :{' '} */}
							<i className='icon ion-ios-phone-portrait text-5xl '></i> &nbsp;:
							<span className='ml-4'>+212610979740</span>
						</p>
						<p className='flex items-center text-xl'>
							{/* <MailIcon width={25} /> :{' '} */}
							<i className='icon  ion-ios-mail text-5xl '></i> &nbsp;:
							<span className='ml-4'>
								<a href='mailto:oubaniayoub@gmail.com'>
									{' '}
									&nbsp;oubaniayoub@gmail.com
								</a>
							</span>
						</p>
					</div>
					<div className=' mt-4'>
						<h2
							className='
						text-xl'>
							Social media :
						</h2>
						<SocialContact />
					</div>
				</div>
			</section>
		</div>
	);
};
export default about;
