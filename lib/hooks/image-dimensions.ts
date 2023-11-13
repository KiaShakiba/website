import { useState, useEffect } from 'react';

type Response =
	[ true, undefined ] |
	[ false, Dimensions ];

export default function useImageDimensions(src: string): Response {
	const [dimensions, setDimensions] = useState<Dimensions | undefined>();

	useEffect(() => {
		setDimensions(undefined);

		let image = new Image();

		image.onload = () => {
			setDimensions({
				height: image.height,
				width: image.width
			});
		};

		image.src = src;
	}, [src]);

	if (!dimensions) {
		return [true, undefined];
	}

	return [false, dimensions];
}

type Dimensions = {
	height: number;
	width: number;
};
