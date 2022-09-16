import Head from 'next/head';

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0' />
				<meta name='description' content='' />

				<title>Kia Shakiba</title>
			</Head>

			{children}
		</>
	);
}
