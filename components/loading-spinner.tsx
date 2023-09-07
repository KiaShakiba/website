import Spinner from '../icons/spinner.svg';

import styles from '../styles/loading-spinner.module.scss';

type Props = {
	className?: string;
};

export default function LoadingSpinner(props: Props) {
	return (
		<div className={[props.className, styles.container].join(' ')}>
			<Spinner />
		</div>
	);
}
