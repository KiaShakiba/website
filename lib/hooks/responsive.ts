import { useState, useEffect } from 'react';
import elementResizeDetecorMaker from 'element-resize-detector';
import { isClient } from '../utils';

export enum Points {
	WIDESCREEN = 1320,
	TABLET_LANDSCAPE = 1024,
	TABLET_PORTRAIT = 768,
	MOBILE_LANDSCAPE = 640,
	MOBILE_PORTRAIT = 480
}

const erd: elementResizeDetecorMaker.Erd | undefined = isClient ?
	elementResizeDetecorMaker({ strategy: 'scroll' }) :
	undefined;

export function useResponsive() : Points {
	const [point, setPoint] = useState<Points>(Points.WIDESCREEN);

	if (!isClient) return point;

	useEffect(() => {
		function handleResize(element: HTMLElement) {
			const width: number = element.clientWidth;

			let p: keyof typeof Points;
			for (p in Points) {
				const value: number = parseInt(Points[p]);
				if (isNaN(value)) continue;

				if (value < width) {
					setPoint(value);
					return;
				}
			}
		}

		erd?.listenTo(document.body, handleResize);

		return () => {
			erd?.removeListener(document.body, handleResize);
		};
	}, []);

	return point;
}
