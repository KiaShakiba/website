import { useState, useRef, useEffect, useCallback, CSSProperties } from 'react';
import useImageDimensions from '../../lib/hooks/image-dimensions';
import LoadingSpinner from '../loading-spinner';

import styles from '../../styles/photos-page/photo.module.scss';

type Props = {
	photo: PhotoItem;
	openGallery: () => void;
};

export default function Photo(props: Props) {
	const { photo } = props;
	const [loading] = useImageDimensions(photo.src);

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
				src={photo.src}
				alt={photo.title}
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
