import { useEffect, useCallback } from 'react';
import { getImagePath } from '../lib/utils';
import useImageDimensions from '../lib/hooks/image-dimensions';
import LoadingSpinner from './loading-spinner';
import { PhotoItem } from './photos-page/photo';
import Close from '../icons/close.svg';
import ArrowLeft from '../icons/arrow-left.svg';
import ArrowRight from '../icons/arrow-right.svg';

import styles from '../styles/gallery.module.scss';

type Props = {
	photos: Array<PhotoItem>;
	index: number;

	next: () => void;
	prev: () => void;

	close: () => void;
};

export default function Photos(props: Props) {
	const { photos, index, close } = props;
	const photo = photos[index];

	const [loading] = useImageDimensions(getImagePath(photo.src));

	const next = useCallback((evt: React.MouseEvent | KeyboardEvent) => {
		evt.stopPropagation();

		if (index >= photos.length) {
			return;
		}

		props.next();
	}, [props, index, photos]);

	const prev = useCallback((evt: React.MouseEvent | KeyboardEvent) => {
		evt.stopPropagation();

		if (index <= 0) {
			return;
		}

		props.prev();
	}, [props, index]);

	const handleKeydown = useCallback((evt: KeyboardEvent) => {
		switch (evt.key) {
			case 'Escape': return close();
			case 'ArrowRight': return next(evt);
			case 'ArrowLeft': return prev(evt);
		}
	}, [close, next, prev]);

	const handleImageClick = useCallback((evt: React.MouseEvent) => {
		evt.stopPropagation();
	}, []);

	useEffect(() => {
		// @ts-ignore
		let url = new URL(location);

		url.searchParams.set('p', getPhotoId(photos[index]));
		history.pushState({}, '', url);

		return () => {
			url.searchParams.delete('p');
			history.pushState({}, '', url);
		};
	}, [index, photos]);

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
			document.body.style.overflow = '';
		};
	}, [handleKeydown]);

	return (
		<div className={styles.container} onClick={close}>
			<button className={styles.close}>
				<Close />
			</button>

			{(() => {
				if (index > 0) {
					return (
						<button
							className={[styles.button, styles.prev].join(' ')}
							onClick={prev}
						>
							<ArrowLeft />
						</button>
					);
				}
			})()}

			<div className={styles.imageContainer}>
				{(() => {
					if (loading) {
						return (
							<LoadingSpinner className={styles.loadingContainer} />
						);
					}

					return (
						<img
							src={getImagePath(photo.src)}
							alt={photo.title || photo.location || 'Image'}
							onClick={handleImageClick}
						/>
					);
				})()}
			</div>

			{(() => {
				if (index < photos.length - 1) {
					return (
						<button
							className={[styles.button, styles.next].join(' ')}
							onClick={next}
						>
							<ArrowRight />
						</button>
					);
				}
			})()}
		</div>
	);
}

export function getPhotoIndex(photos: Array<PhotoItem>, photoId: string): number {
	return photos.findIndex(photo => photoId === getPhotoId(photo));
}

export function getPhotoId(photo: PhotoItem): string {
	return photo.src
		.replace('photos/', '')
		.replace('.jpg', '');
}
