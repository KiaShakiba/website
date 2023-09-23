import socials, { getSocial } from './socials';
import styles from '../styles/footer.module.scss';

export default function Footer() {
	let year = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.socials}>{socials.map(getSocial)}</div>

			<div className={styles.copyright}>
				<span>&copy; {year} Kia Shakiba</span>
			</div>
		</footer>
	);
}
