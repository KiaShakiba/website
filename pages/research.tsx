import Link from 'next/link';
import Layout from '../components/layout';
import Content from '../components/content';
import { Pages } from '../components/header';

import styles from '../styles/research.module.scss';

export default function Research() {
	return (
		<Layout>
			<Content className={styles.container}>
				<h1>My research</h1>

				<p>My current area of research is the optimization of in-memory caches. Particulary, I am focused on managing the allocation of cache instances in multi-tenant caching servers. Some of my topics of research are:</p>

				<ul>
					<li>Eviction policy-specific miss ratio curve generation</li>
					<li>Efficient eviction policy switching</li>
					<li>Resource allocation on multi-tenant caching servers</li>
				</ul>

				<p>If you have any questions, please feel free to <Link href={Pages.CONTACT}>contact me</Link>!</p>
			</Content>
		</Layout>
	);
}
