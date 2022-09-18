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

			<button className={styles.menuButton}></button>

			<nav>
				<Link href='/'>HOME</Link>
				<Link href='/'>ABOUT</Link>
			</nav>
		</header>
	);
}
