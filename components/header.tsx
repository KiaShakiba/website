import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import socials, { getSocial } from './socials';
import Close from '../icons/close.svg';
import styles from '../styles/header.module.scss';

export enum Pages {
	HOME = '/',
	ABOUT = '/about',
	RESEARCH = '/research',
	PHOTOS = '/photos',
	CONTACT = '/contact'
}

type Props = {
	theme: 'light' | 'dark';
};

const SHRINK_SCROLL = 48;

export default function Header({ theme }: Props) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [menuShrink, setMenuShrink] = useState(false);

	const handleKeydown = useCallback((evt: KeyboardEvent) => {
		if (evt.key === 'Escape') {
			setMenuOpen(false);
		}
	}, []);

	const handleScroll = useCallback(() => {
		if (window.scrollY <= SHRINK_SCROLL) {
			setMenuShrink(false);
		}

		if (window.scrollY > SHRINK_SCROLL) {
			setMenuShrink(true);
		}
	}, []);

	useEffect(() => {
		if (menuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	}, [menuOpen]);

	useEffect(() => {
		window.addEventListener('keydown', handleKeydown);
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleKeydown, handleScroll]);

	let classes = [
		styles.header,
		theme === 'light' ? styles.light : styles.dark
	];

	if (menuOpen) {
		classes.push(styles.menuOpen);
	}

	if (menuShrink) {
		classes.push(styles.menuShrink);
	}

	return (
		<>
			<header className={classes.join(' ')}>
				<Link href={Pages.CONTACT} className={styles.contact}>CONTACT</Link>

				<div className={styles.name}>
					<Link href={Pages.HOME}>Kia Shakiba</Link>
				</div>

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

			{(() => {
				if (theme === 'light') {
					return (
						<div className={styles.placeholder}></div>
					);
				}
			})()}
		</>
	);
}
