import type { NextPage } from 'next';
import { useState } from 'react';
import Image from 'next/image';
import { Document, Page } from 'react-pdf';
import Layout from '../components/layout';
import Loading from '../components/loading';
import Header from '../components/header';

import styles from '../styles/home.module.scss';

export default function Cv() {
	return (
		<Layout>
			<Header theme='light' />

			<main className={styles.main}>
			</main>

			<footer className={styles.footer}></footer>
		</Layout>
	);
}
