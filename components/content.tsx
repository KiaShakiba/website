import styles from '../styles/content.module.scss';

type Props = {
	className?: string;
};

export default function Content(props: React.PropsWithChildren<Props>) {
	let classes: Array<string> = [styles.container];

	if (props.className) {
		classes.push(props.className);
	}

	return (
		<div className={classes.join(' ')}>{props.children}</div>
	);
}
