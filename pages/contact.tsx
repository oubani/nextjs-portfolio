import React from 'react';

interface Props {}

const contact: React.FC<Props> = () => {
	return (
		<div>
			<h1 className='text-3xl mt-8 mb-4'>Contact me</h1>
			<p className='text-xl mb-6'>
				{' '}
				You can contact me at{' '}
				<a href='mailto:oubaniayoub@gmail.com' className=''>
					oubaniayoub@gmail.com
				</a>{' '}
				or by using this form :{' '}
			</p>
			<form name='contact' method='POST' action='/success' data-netlify='true'>
				<input type='hidden' name='form-name' value='contact' />
				<div className='flex flex-col mb-4'>
					<label
						htmlFor='Name'
						className='mb-3 block text-gray-700 font-bold text-xl'>
						Name :{' '}
					</label>
					<input
						required={true}
						type='text'
						name='name'
						className='shadow appearance-none border border-black rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						placeholder='Enter your name'
					/>
				</div>
				<div className='flex flex-col mb-4'>
					<label
						htmlFor='Name'
						className='mb-3 block text-gray-700 font-bold text-xl'>
						Email :{' '}
					</label>
					<input
						required={true}
						type='email'
						name='email'
						className='shadow appearance-none border border-black rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						placeholder='Enter your email'
					/>
				</div>
				<div className='flex flex-col mb-4'>
					<label
						htmlFor='Name'
						className='mb-3 block text-gray-700 font-bold text-xl'>
						Message :{' '}
					</label>
					<textarea
						required={true}
						name='message'
						className='form-textarea mt-1 block h-40  shadow appearance-none border border-black rounded w-full py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
						placeholder='Enter your message'></textarea>
				</div>
				<div className='w-full flex justify-between mt-8'>
					<button className='bg-blue-600 mx-auto hover:bg-blue-700 text-white shadow-inner px-8 py-2 rounded-lg border-2 border-blue-600 hover:border-blue-700 text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap '>
						Send{' '}
					</button>
				</div>
			</form>
		</div>
	);
};
export default contact;
