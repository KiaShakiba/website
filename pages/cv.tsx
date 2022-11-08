import type { NextPage } from 'next';
import { useState } from 'react';
import Image from 'next/image';
import { Document, Page } from 'react-pdf';
import Layout from '../components/layout';
import Loading from '../components/loading';
import Header from '../components/header';

import styles from '../styles/cv.module.scss';

export default function Cv() {

	function onDocumentLoad({ numPages }) {
		console.log(numPages);
	}

	return (
		<Layout>
			<Header theme='light' />

			<main className={styles.main}>
				<Document file='/cv.pdf'>
				</Document>
			</main>

			<footer className={styles.footer}></footer>
		</Layout>
	);
}
