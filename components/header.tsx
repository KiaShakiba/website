import { useState, useEffect } from 'react';
import Link from 'next/link';
import socials, { Social, getSocial } from './socials';
import styles from '../styles/header.module.scss';

type Props = {
};

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	let classes = [styles.header];

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
			<Link href='/'>
				<a className={styles.contact}>CONTACT</a>
			</Link>

			<button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
				<span>MENU</span>

				<div className={styles.menuBars}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</button>

			<nav>
				<button className='close-menu' onClick={() => setMenuOpen(false)}></button>

				<Link href='/'>HOME</Link>
				<Link href='/'>ABOUT</Link>
			</nav>

			<div className={styles.shade}
				onClick={() => setMenuOpen(false)}></div>

			<div className={styles.social}>{socials.map(getSocial)}</div>
		</header>
	);
}


