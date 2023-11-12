import { useState, useCallback } from 'react';
import { isClient, getImagePath } from '../../lib/utils';
import Pin from '../../icons/pin.svg';
import LoadingSpinner from '../loading-spinner';

import styles from '../../styles/photos-page/photo.module.scss';

type Props = {
	photo: PhotoItem;
	openGallery: () => void;
};

export default function Photo(props: Props) {
	const { photo } = props;
	const [loading, setLoading] = useState(true);

	const openGallery = useCallback(() => {
		if (isClient && window.innerWidth > 640) {
			props.openGallery();
		}
	}, [props]);

	return (
		<div
			className={styles.container}
			onClick={openGallery}
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

			{(() => {
				if (photo.title) {
					return (
						<div className={styles.titleContainer}>
							<span>{photo.title}</span>
						</div>
					);
				}
			})()}

			{(() => {
				if (photo.location) {
					return (
						<div className={styles.locationContainer}>
							<span>{photo.location}</span>
							<Pin />
						</div>
					);
				}
			})()}
		</div>
	);
}

export type PhotoItem = {
	title?: string;
	location?: string;

	src: string;
};
