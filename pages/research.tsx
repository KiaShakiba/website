import Link from 'next/link';
import Layout from '../components/layout';
import Content from '../components/content';
import { Pages } from '../components/header';
import Publication, { Props as PublicationProps } from '../components/research-page/publication';

import styles from '../styles/research.module.scss';

const publications: Array<PublicationProps> = [
	{
		title: 'PaperCache: In-Memory Caching with Dynamic Eviction Policies',
		authors: [
			{ name: 'Kia Shakiba', link: 'https://kiashakiba.ca' },
			{ name: 'Michael Stumm', link: 'https://www.michaelstumm.com' },
		],
		conference: {
			name: 'Proc. Workshop on Hot Topics in Storage and File Systems (HotStorage\'25)',
			link: 'https://dl.acm.org/doi/proceedings/10.1145/3736548',
			month: 'July',
			year: 2025,
		},
		pages: {
			start: 107,
			end: 113,
		},
		links: {
			page: 'https://dl.acm.org/doi/abs/10.1145/3736548.3737836',
			pdf: 'https://dl.acm.org/doi/pdf/10.1145/3736548.3737836',
			slides: 'https://www.hotstorage.org/2025/slides/PaperCache_%20In-Memory%20Caching%20with%20Dynamic%20Eviction%20Policies.pdf',
			website: 'https://papercache.io',
		},
	},
	{
		title: 'Kosmo: Efficient Online Miss Ratio Curve Generation for Eviction Policy Evaluation',
		authors: [
			{ name: 'Kia Shakiba', link: 'https://kiashakiba.ca' },
			{ name: 'Sari Sultan' },
			{ name: 'Michael Stumm', link: 'https://www.michaelstumm.com' },
		],
		conference: {
			name: 'Proc. Conf. on File and Storage Technologies (FAST\'24)',
			link: 'https://www.usenix.org/conference/fast24',
			month: 'February',
			year: 2024,
		},
		pages: {
			start: 89,
			end: 105,
		},
		links: {
			page: 'https://www.usenix.org/conference/fast24/presentation/shakiba',
			pdf: 'https://www.usenix.org/system/files/fast24-shakiba.pdf',
			slides: 'https://www.usenix.org/system/files/fast24_slides-shakiba.pdf',
			video: 'https://www.youtube.com/watch?v=67QWxt4QZ38',
		},
	},
];

export default function Research() {
	return (
		<Layout>
			<Content className={styles.container}>
				<h1>My research</h1>

				<p>My current area of research is the optimization of in-memory caches. Particulary, I am focused on managing the allocation of cache instances in multi-tenant caching servers. Some of my topics of research are:</p>

				<ul>
					<li>Eviction policy-specific miss ratio curve generation</li>
					<li>Eviction policy inclusion property violations</li>
					<li>Efficient online eviction policy switching</li>
					<li>Resource allocation on multi-tenant caching servers</li>
				</ul>

				<p>If you have any questions, please feel free to <Link href={Pages.CONTACT}>contact me</Link>!</p>

				<h2>Publications</h2>
					{(() => {
						return publications.map((publication, i) => {
							return (
								<Publication {...publication} key={i} />
							);
						});
					})()}
			</Content>
		</Layout>
	);
}
