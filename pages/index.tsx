import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/home.module.scss';

export default function Home() {
	return (
		<>
			<Head>
				<title>Kia Shakiba</title>
				<meta name='description' content='' />
			</Head>

			<main className={styles.main}></main>

			<footer className={styles.footer}></footer>
		</>
	);
}
