import Layout from '../components/layout';
import Photos from '../components/photos-page/photos';

const PHOTOS = [
	{ title: 'Yosemite, US', src: '/images/photos/yosemite-1.jpg' },
	{ title: 'Yosemite, US', src: '/images/photos/yosemite-2.jpg' },
	{ title: 'Vancouver, BC', src: '/images/photos/vancouver-1.jpg' },
	{ title: 'Vancouver, BC', src: '/images/photos/vancouver-2.jpg' },
	{ title: 'Vancouver, BC', src: '/images/photos/vancouver-3.jpg' },
	{ title: 'Vancouver, BC', src: '/images/photos/vancouver-4.jpg' },
	{ title: 'Vancouver, BC', src: '/images/photos/vancouver-5.jpg' },
	{ title: 'Vancouver, BC', src: '/images/photos/vancouver-6.jpg' },
	{ title: 'San Fransico, US', src: '/images/photos/san-francisco-1.jpg' },
	{ title: 'San Fransico, US', src: '/images/photos/san-francisco-2.jpg' },
	{ title: 'San Fransico, US', src: '/images/photos/san-francisco-3.jpg' },
	{ title: 'San Fransico, US', src: '/images/photos/san-francisco-4.jpg' },
	{ title: 'Anna\'s Hummingbird', src: '/images/photos/vancouver-7.jpg' },
	{ title: 'Vancouver, BC', src: '/images/photos/vancouver-8.jpg' },
	{ title: 'Great Blue Heron', src: '/images/photos/great-blue-heron-1.jpg' },
	{ title: 'Marsh Wren', src: '/images/photos/vancouver-10.jpg' },
	{ title: 'Milton, ON', src: '/images/photos/milton-1.jpg' },
	{ title: 'Pickerel Frog', src: '/images/photos/pickerel-frog.jpg' },
	{ title: 'Chickadee', src: '/images/photos/chickadee.jpg' },
	{ title: 'Vancouver, BC', src: '/images/photos/macro-1.jpg' },
	{ title: 'Blue Jay', src: '/images/photos/blue-jay.jpg' },
	{ title: 'Tree Swallow', src: '/images/photos/tree-swallow.jpg' },
	{ title: 'Northern Cardinal', src: '/images/photos/northern-cardinal.jpg' },
	{ title: 'Common Grackle', src: '/images/photos/common-grackle.jpg' },
	{ title: 'Red-Winged Blackbird', src: '/images/photos/red-winged-blackbird.jpg' },
	{ title: 'Great Blue Heron', src: '/images/photos/great-blue-heron-2.jpg' },
	{ title: 'American Goldfinch', src: '/images/photos/american-goldfinch.jpg' },
	{ title: 'Dale Chihuly', src: '/images/photos/chihuly.jpg' },
];

export default function PhotosPage() {
	return (
		<Layout>
			<Photos photos={PHOTOS} />
		</Layout>
	);
}
