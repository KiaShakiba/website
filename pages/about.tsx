import type { NextPage } from 'next';
import { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/layout';
import Loading from '../components/loading';
import Header from '../components/header';
import At from '../icons/at.svg';

import styles from '../styles/about.module.scss';

export default function About() {
	return (
		<Layout>
			<Header theme='light' />

			<main className={styles.main}>
				<div className={styles.container}>
					<div className={styles.mobileNameContainer}>
						<h1>Kia Shakiba</h1>
					</div>

					<div className={styles.leftContainer}>
						<div className={styles.imageContainer}>
							<Image
								src='/images/kia.jpg'
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

						<p>Hi, my name is Kia! I'm a Ph.D. Candidate at the University of Toronto in the The Edward S. Rogers Sr. Department of Electrical & Computer Engineering. The focus of my research is on in-memory cache modelling and optimization.</p>
						<p>I received my B.A.S.c. in Computer Engineering from the University of Waterloo.</p>
						<p>I'm passionate about teaching.</p>
						<p>I also travel and take pictures.</p>
					</div>
				</div>
			</main>

			<footer className={styles.footer}></footer>
		</Layout>
	);
}
