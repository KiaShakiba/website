import Layout from '../components/layout';
import Photos from '../components/photos-page/photos';

const PHOTOS = [
	{ title: 'Yosemite, US', src: 'photos/yosemite-1.jpg' },
	{ title: 'Yosemite, US', src: 'photos/yosemite-2.jpg' },
	{ title: 'Vancouver, BC', src: 'photos/vancouver-1.jpg' },
	{ title: 'Vancouver, BC', src: 'photos/vancouver-2.jpg' },
	{ title: 'Vancouver, BC', src: 'photos/vancouver-3.jpg' },
	{ title: 'Vancouver, BC', src: 'photos/vancouver-4.jpg' },
	{ title: 'Vancouver, BC', src: 'photos/vancouver-5.jpg' },
	{ title: 'Vancouver, BC', src: 'photos/vancouver-6.jpg' },
	{ title: 'San Fransico, US', src: 'photos/san-francisco-1.jpg' },
	{ title: 'San Fransico, US', src: 'photos/san-francisco-2.jpg' },
	{ title: 'San Fransico, US', src: 'photos/san-francisco-3.jpg' },
	{ title: 'San Fransico, US', src: 'photos/san-francisco-4.jpg' },
	{ title: 'Anna\'s Hummingbird', src: 'photos/vancouver-7.jpg' },
	{ title: 'Vancouver, BC', src: 'photos/vancouver-8.jpg' },
	{ title: 'Great Blue Heron', src: 'photos/great-blue-heron-1.jpg' },
	{ title: 'Marsh Wren', src: 'photos/vancouver-10.jpg' },
	{ title: 'Milton, ON', src: 'photos/milton-1.jpg' },
	{ title: 'Pickerel Frog', src: 'photos/pickerel-frog.jpg' },
	{ title: 'Chickadee', src: 'photos/chickadee.jpg' },
	{ title: 'Vancouver, BC', src: 'photos/macro-1.jpg' },
	{ title: 'Blue Jay', src: 'photos/blue-jay.jpg' },
	{ title: 'Tree Swallow', src: 'photos/tree-swallow.jpg' },
	{ title: 'Northern Cardinal', src: 'photos/northern-cardinal.jpg' },
	{ title: 'Common Grackle', src: 'photos/common-grackle.jpg' },
	{ title: 'Red-Winged Blackbird', src: 'photos/red-winged-blackbird.jpg' },
	{ title: 'Great Blue Heron', src: 'photos/great-blue-heron-2.jpg' },
	{ title: 'American Goldfinch', src: 'photos/american-goldfinch.jpg' },
	{ title: 'Dale Chihuly', src: 'photos/chihuly.jpg' },
];

export default function PhotosPage() {
	return (
		<Layout>
			<Photos photos={PHOTOS} />
		</Layout>
	);
}
