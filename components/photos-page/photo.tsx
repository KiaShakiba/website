import { useState } from 'react';
import { getImagePath } from '../../lib/utils';
import LoadingSpinner from '../loading-spinner';

import styles from '../../styles/photos-page/photo.module.scss';

type Props = {
	photo: PhotoItem;
	openGallery: () => void;
};

export default function Photo(props: Props) {
	const { photo } = props;
	const [loading, setLoading] = useState(true);

	return (
		<div
			className={styles.container}
			onClick={props.openGallery}
		>
			{(() => {
				if (loading) {
					return (
						<LoadingSpinner />
					);
				}
			})()}

			<img
				src={getImagePath(photo.src)}
				alt={photo.title}
				onLoad={() => setLoading(false)}
			/>

			<div className={styles.titleContainer}>
				<span>{photo.title}</span>
			</div>
		</div>
	);
}

export type PhotoItem = {
	title: string;
	src: string;
};
