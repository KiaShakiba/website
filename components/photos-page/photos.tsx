import { useState, useRef, useEffect, useCallback } from 'react';
import elementResizeDetectorMaker from 'element-resize-detector';
import Gallery, { getPhotoIndex } from '../gallery';
import Photo, { PhotoItem } from './photo';

import styles from '../../styles/photos-page/photos.module.scss';

type Props = {
	photos: Array<PhotoItem>;
	photoId?: string;
};

export default function Photos(props: Props) {
	const containerRef = useRef<HTMLDivElement>(null);

	const [visible, setVisible] = useState(false);
	const [columns, setColumns] = useState(4);
	const [galleryIndex, setGalleryIndex] = useState(-1);

	const { photos } = props;
	const grouped = getGroupedPhotos(photos, columns);

	const handleResize = useCallback((container: HTMLElement) => {
		let width = container.clientWidth;

		if (width <= 640) {
			setColumns(1);
		} else if (width <= 1024) {
			setColumns(2);
		} else if (width <= 1320) {
			setColumns(3);
		} else {
			setColumns(4);
		}

		setVisible(true);
	}, []);

	useEffect(() => {
		let index = props.photoId ? getPhotoIndex(props.photos, props.photoId) : -1;
		setGalleryIndex(index);
	}, [props.photos, props.photoId]);

	useEffect(() => {
		const erd = elementResizeDetectorMaker({
			strategy: 'scroll'
		});

		if (containerRef.current) {
			erd.listenTo(containerRef.current, handleResize);
		}

		return () => {
			if (containerRef.current) {
				erd.removeAllListeners(containerRef.current);
			}
		};
	}, [containerRef, handleResize]);

	return (
		<div ref={containerRef} className={styles.container}>
			{(() => {
				if (!visible) return;

				return grouped.map((group, i) => {
					let photoColumn = group.map((photo, j) => {
						let index = i + j * columns;

						return (
							<Photo
								photo={photo}
								openGallery={() => setGalleryIndex(index)}
								key={index}
							/>
						);
					});

					return (
						<div className={styles.column} key={i}>{photoColumn}</div>
					);
				});
			})()}

			{(() => {
				if (galleryIndex > -1) {
					return (
						<Gallery
							photos={photos}
							index={galleryIndex}
							setIndex={setGalleryIndex}
							close={() => setGalleryIndex(-1)}
						/>
					);
				}
			})()}
		</div>
	);
}

function getGroupedPhotos(photos: Array<PhotoItem>, columns: number): PhotoItem[][] {
	let grouped: PhotoItem[][] = [];
	let index = 0;

	for (let i=0; i<columns; i++) {
		grouped.push([]);
	}

	while (index < photos.length) {
		grouped[index % columns].push(photos[index]);
		index++;
	}

	return grouped;
}
