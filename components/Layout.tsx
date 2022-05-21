import Head from "next/head";

import styles from "../styles/Home.module.scss";

export const Layout = ({ children }: { children: JSX.Element[] }): JSX.Element => {
	return (
		<div>
			<Head>
				<title>A Chickens Window</title>
				<meta name='description' content='addition math game to spawn chickens' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
			</Head>
			<main className={styles.main}>
				<h1 className={styles.title}>{`A Chicken's Window`}</h1>
				{children}
			</main>
		</div>
	);
};
