import { motion } from "framer-motion";
import Head from "next/head";

import styles from "../styles/Home.module.scss";

export const Layout = ({ children }: { children: JSX.Element[] }): JSX.Element => {
	return (
		<div className={styles.body}>
			<Head>
				<title>A Chickens Window</title>
				<meta name='description' content='addition math game to spawn chickens' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
				<link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
				<link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
				<link rel='manifest' href='/site.webmanifest' />
			</Head>
			<motion.h1
				className={styles.title}
				initial='hidden'
				animate='visible'
				variants={{
					hidden: { scale: 0.8, opacity: 0 },
					visible: {
						scale: 1,
						opacity: 1,
						transition: { delay: 1.5, duration: 1.75, type: "spring" }
					}
				}}>
				{`A Chicken's Window`}
			</motion.h1>
			<motion.main
				className={styles.main}
				initial='hidden'
				animate='visible'
				variants={{
					hidden: { scale: 0.8, opacity: 0, width: 0 },
					visible: {
						scale: 1,
						opacity: 1,
						width: "100%",
						transition: { delay: 0.25, duration: 1.25 }
					}
				}}>
				{children}
			</motion.main>
		</div>
	);
};
