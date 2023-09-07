import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
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
	const [loading, setLoading] = useState(true);

	const { photos, index, close } = props;

	const next = useCallback(() => {
		if (index >= photos.length) {
			return;
		}

		props.next();
	}, [props.next, index, photos]);

	const prev = useCallback(() => {
		if (index <= 0) {
			return;
		}

		props.prev();
	}, [props.prev, index]);

	const handleKeydown = useCallback((evt: KeyboardEvent) => {
		switch (evt.which) {
			case 27: return close();
			case 39: return next();
			case 37: return prev();
		}
	}, []);

	useEffect(() => {
		setLoading(true);
	}, [index]);

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		window.addEventListener('keydown', handleKeydown);

		return () => {
			window.removeEventListener('keydown', handleKeydown);
			document.body.style.overflow = '';
		};
	}, []);

	return (
		<div className={styles.container}>
			<button className={styles.close} onClick={close}>
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
				})()}

				<Image
					src={photos[index].src}
					alt={photos[index].title}
					style={{ objectFit: 'contain' }}
					quality={100}
					onLoadingComplete={() => setLoading(false)}
					fill
				/>
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
