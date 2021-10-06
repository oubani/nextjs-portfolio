import { useState, useEffect } from 'react';
import Logo from '../components/Logo';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { MoonIcon, SunIcon, MenuAlt1Icon, XIcon } from '@heroicons/react/solid';

import styles from '../styles/Navbar.module.css';
interface Props {}

const Navbar: React.FC<Props> = () => {
	const { systemTheme, theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [clicked, setClicked] = useState(true);
	const { nav, inner_nav, nav_item, activeLink, nav_list, nav_icon, navClick } =
		styles;
	const router = useRouter();
	router.asPath === '/' ? activeLink : '';

	useEffect(() => {
		setMounted(true);
	}, []);

	const renderThemeChanger = () => {
		if (!mounted) return null;
		const currentTheme = theme === 'system' ? systemTheme : theme;
		if (currentTheme === 'dark') {
			return (
				<SunIcon
					className='w-7 h-7'
					role='button'
					onClick={() => setTheme('light')}
				/>
			);
		} else {
			return (
				<MoonIcon
					className='w-7 h-7'
					role='button'
					onClick={() => setTheme('dark')}
				/>
			);
		}
	};
	return (
		<nav
			className={` backdrop-blur-md fixed top-0 w-full border-b-2 border-solid  border-gray-700 dark:border-gray-200 `}>
			<div className='container mx-auto '>
				<div className={inner_nav}>
					<Logo />
					<div className={`${nav_icon}`}>
						{!clicked ? (
							<MenuAlt1Icon
								className='w-7 h-7'
								role='button'
								onClick={() => {
									setClicked(true);
								}}
							/>
						) : (
							<XIcon
								className='w-7 h-7'
								role='button'
								onClick={() => {
									setClicked(false);
								}}
							/>
						)}
					</div>

					<ul className={`${nav_list} ${clicked ? navClick : ''} `}>
						<li
							className={`${nav_item} ${
								router.asPath === '/' ? activeLink : ''
							}`}>
							<Link href='/'>
								<a>Home</a>
							</Link>
						</li>
						<li
							className={`${nav_item} ${
								router.asPath === '/projects' ? activeLink : ''
							}`}>
							<Link href='/projects'>
								<a>Projects</a>
							</Link>
						</li>
						<li
							className={`${nav_item} ${
								router.asPath === '/blog' ? activeLink : ''
							}`}>
							<Link href='/'>
								<a>Blog</a>
							</Link>
						</li>
						<li
							className={`${nav_item} ${
								router.asPath === '/about' ? activeLink : ''
							}`}>
							<Link href='/'>
								<a>About</a>
							</Link>
						</li>
						<li
							className={`${nav_item} ${
								router.asPath === '/contact' ? activeLink : ''
							}`}>
							<Link href='/contact'>
								<a>Contact</a>
							</Link>
						</li>
						<li className={nav_item}>{renderThemeChanger()}</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
