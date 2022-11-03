export const isClient: boolean = typeof window !== 'undefined';

export function isImageLoaded(path: string): boolean {
	if (!isClient) return false;
	let image = new Image();
	image.src = path;
	return image.complete;
}
