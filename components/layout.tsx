import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import styles from '../styles/layout.module.scss';

export type Props = {
	fullscreen?: boolean;
};

export default function Layout(props: React.PropsWithChildren<Props>) {
	let classes: Array<string> = [];

	if (!props.fullscreen) {
		classes.push(styles.mainFill);
	}

	let theme: 'dark' | 'light' = props.fullscreen ? 'dark' : 'light';

	const title = 'Kia Shakiba';
	const description = 'Kia Shakiba - Cloud cache researcher | Ph.D. Candiadate';

	return (
		<>
			<Head>
				<title>{title}</title>

				<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' />
				<meta name='description' content={description} key='desc' />

				<meta property='og:title' content='Kia Shakiba' />
				<meta property='og:description' content={description} />
				<meta property='og:image' content='https://kiashakiba.ca/images/kia-compressed.jpg' />
			</Head>

			<main className={classes.join(' ')}>
				<Header theme={theme} />

				<div className={styles.container}>{props.children}</div>

				{(() => {
					if (!props.fullscreen) {
						return <Footer />;
					}
				})()}
			</main>
		</>
	);
}
