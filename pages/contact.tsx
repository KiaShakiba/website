import Layout from '../components/layout';
import Content from '../components/content';
import At from '../icons/at.svg';

import styles from '../styles/contact.module.scss';

export default function Contact() {
	return (
		<Layout>
			<Content className={styles.container}>
				<h1>Contact</h1>

				<div>
					<p>Please contact me via email at: kia.shakiba<At />mail.utoronto.ca</p>
				</div>
			</Content>
		</Layout>
	);
}
