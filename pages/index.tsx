import type { NextPage } from 'next';
import { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/layout';
import Loading from '../components/loading';
import Header from '../components/header';
import styles from '../styles/home.module.scss';

export default function Home() {
	const [loading, setLoading] = useState<boolean>(true);

	let classes: Array<string> = [styles.background];

	if (!loading) {
		classes.push(styles.show);
	}

	const handleLoaded = () => {
		setTimeout(() => setLoading(false), 1500);
	};

	return (
		<Layout>
			{loading && <Loading />}

			<Header />

			<main className={styles.main}>
				<div className={classes.join(' ')}>
					<Image
						src='/images/background.jpg'
						layout='fill'
						quality={100}
						objectFit='cover'
						onLoadingComplete={handleLoaded}
					/>

					<div></div>
				</div>
			</main>

			<footer className={styles.footer}></footer>
		</Layout>
	);
}
