import { useRouter } from 'next/router';
import Layout from '../components/layout';
import Photos from '../components/photos-page/photos';
import photos from '../lib/photos.json';

export default function PhotosPage() {
	const router = useRouter();

	return (
		<Layout>
			<Photos
				photos={photos}
				photoId={router.query.p as string | undefined}
			/>
		</Layout>
	);
}
