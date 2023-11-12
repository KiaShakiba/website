import Layout from '../components/layout';
import Photos from '../components/photos-page/photos';
import photos from '../lib/photos.json';

export default function PhotosPage() {
	return (
		<Layout>
			<Photos photos={photos} />
		</Layout>
	);
}
