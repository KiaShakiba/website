import { useState, useEffect } from 'react';
import Link from 'next/link';
import socials, { getSocial } from './socials';
import Close from '../icons/close.svg';
import styles from '../styles/header.module.scss';

export enum Pages {
	HOME = '/',
	ABOUT = '/about',
	CV = '/cv',
	PHOTOS = '/photos',
	CONTACT = '/contact'
}

type Props = {
	theme: 'light' | 'dark';
};

export default function Header({ theme }: Props) {
	const [menuOpen, setMenuOpen] = useState(false);

	let classes = [
		styles.header,
		theme === 'light' ? styles.light : styles.dark
	];

	if (menuOpen) {
		classes.push(styles.menuOpen);
	}

	const handleKeydown = (evt: KeyboardEvent) => {
		if (evt.which === 27) {
			setMenuOpen(false);
		}
	}

	useEffect(() => {
		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
		};
	}, []);

	return (
		<header className={classes.join(' ')}>
			<Link href={Pages.CONTACT} className={styles.contact}>CONTACT</Link>

			<button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
				<span>MENU</span>

				<div className={styles.menuBars}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</button>

			<nav>
				<button className={styles.closeMenu} onClick={() => setMenuOpen(false)}>
					<Close />
				</button>

				{(() => {
					return Object.entries(Pages).map((page, i) => {
						return (
							<Link href={page[1]} className={styles.navLink} key={i}>{page[0]}</Link>
						);
					});
				})()}

				<div className={styles.socialsMobile}>{socials.map(getSocial)}</div>
			</nav>

			<div className={styles.shade}
				onClick={() => setMenuOpen(false)}>

				<div className={styles.socials}>{socials.map(getSocial)}</div>
			</div>
		</header>
	);
}
