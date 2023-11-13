import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '../lib/utils';
import Layout from '../components/layout';
import Content from '../components/content';
import { Pages } from '../components/header';

import styles from '../styles/about.module.scss';

export default function About() {
	return (
		<Layout>
			<Content className={styles.container}>
				<div className={styles.mobileNameContainer}>
					<h1>Kia Shakiba</h1>
				</div>

				<div className={styles.leftContainer}>
					<div className={styles.imageContainer}>
						<Image
							src={getImagePath('kia.jpg')}
							alt='Kia Shakiba'
							layout='fill'
							quality={100}
							objectFit='cover'
						/>
					</div>

					<div className={styles.tags}>
						<span>Researcher</span>
						<span>Photographer</span>
					</div>
				</div>

				<div className={styles.rightContainer}>
					<h1>Kia Shakiba</h1>

					<p>Hi, my name is Kia! I&apos;m a Ph.D. Candidate at the University of Toronto in the The Edward S. Rogers Sr. Department of Electrical & Computer Engineering. The focus of my research is on in-memory cache modelling and optimization. Read more about this <Link href={Pages.RESEARCH}>here</Link>.</p>
					<p>I received my B.A.S.c. in Computer Engineering from the University of Waterloo. During my time there I worked as a software developer for various companies, including Environment Canada, Rogers Media, and IBM Canada.</p>
					<p>I&apos;m passionate about teaching. In 2019, I started an education technology company, <Link href='https://examify.ca' target='_blank'>Examify Inc.</Link>, which focuses on the online evaluation of coding assignments and examinations.</p>
					<p>I also travel and take <Link href={Pages.PHOTOS}>pictures</Link>.</p>
				</div>
			</Content>
		</Layout>
	);
}
