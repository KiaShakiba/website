import Layout from '../components/layout';
import Photos from '../components/photos-page/photos';

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
			<Photos photos={PHOTOS} />
		</Layout>
	);
}
