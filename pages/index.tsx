import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Loading from '../components/loading';
import styles from '../styles/home.module.scss';

export default function Home() {
	const [loading, setLoading] = useState<boolean>(true);

	return (
		<>
			<Head>
				<title>Kia Shakiba</title>
				<meta name='description' content='' />
			</Head>

			{loading && <Loading />}

			<main className={styles.main}></main>

			<footer className={styles.footer}></footer>
		</>
	);
}
