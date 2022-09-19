import Link from 'next/link';
import styles from '../styles/header.module.scss';

type Props = {
};

export default function Header() {
	return (
		<header className={styles.header}>
			<Link href='/'>
				<a className={styles.contact}>CONTACT</a>
			</Link>

			<button className={styles.menuButton}>
				<span>TEST</span>
				<div className={styles.menuBars}>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</button>

			{/*<nav>
				<Link href='/'>HOME</Link>
				<Link href='/'>ABOUT</Link>
			</nav>*/}
		</header>
	);
}
