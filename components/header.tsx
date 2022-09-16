import Link from 'next/link';
import styles from '../styles/home.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<nav>
				<Link href='/'>Home</Link>
			</nav>
		</header>
	);
}
