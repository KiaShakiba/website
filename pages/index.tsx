import type { NextPage } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { isImageLoaded } from '../lib/utils';
import Layout from '../components/layout';
import Loading from '../components/loading';
import Header, { Pages } from '../components/header';
import styles from '../styles/home.module.scss';

export default function Home() {
	const IMAGE_PATH: string = '/images/background2.jpg';
	const imageLoaded: boolean = isImageLoaded(IMAGE_PATH);

	const [loading, setLoading] = useState<boolean>(!imageLoaded);

	let classes: Array<string> = [styles.background];

	if (loading) {
		classes.push(styles.loading);
	} else {
		classes.push(styles.show);
	}

	const handleLoaded = () => {
		if (!loading) return;
		setTimeout(() => setLoading(false), 1500);
	};

	return (
		<Layout>
			{(() => {
				if (loading) return <Loading />;
			})()}

			<Header theme='dark' />

			<main className={styles.main}>
				<div className={classes.join(' ')}>
					<Image
						src={IMAGE_PATH}
						alt='Background'
						layout='fill'
						quality={100}
						objectFit='cover'
						onLoadingComplete={handleLoaded}
					/>

					<div></div>
				</div>

				<div className={styles.bottomBar}>
					<Link href={Pages.CV}>CV</Link>
					<Link href={Pages.ABOUT}>ABOUT</Link>
					<Link href={Pages.PHOTOS}>PHOTOS</Link>
				</div>
			</main>
		</Layout>
	);
}
