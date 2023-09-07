import type { NextPage } from 'next';
import { useState } from 'react';
import Image from 'next/image';
import Layout from '../components/layout';
import Loading from '../components/loading';
import Header from '../components/header';
import Photos from '../components/photos-page/photos';

import styles from '../styles/photos.module.scss';

const PHOTOS = [
	{ title: 'Bird', src: '/images/background-bird.png' },
	{ title: 'Yosemite', src: '/images/background-yosemite.jpg' },
	{ title: 'Image', src: '/images/background-portrait.jpg' },
	{ title: 'Image', src: '/images/background-bird.png' },
	{ title: 'Image', src: '/images/background-yosemite.jpg' },
	{ title: 'Image', src: '/images/background-portrait.jpg' },
	{ title: 'Image', src: '/images/background-bird.png' },
	{ title: 'Image', src: '/images/background-yosemite.jpg' },
	{ title: 'Image', src: '/images/background-portrait.jpg' },
];

export default function PhotosPage() {
	return (
		<Layout>
			<Header theme='light' />

			<main className={styles.main}>
				<Photos photos={PHOTOS} />
			</main>
		</Layout>
	);
}
