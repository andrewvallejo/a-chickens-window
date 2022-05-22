import Image from "next/image";

import { useGameContext } from "../../context/GameContext";
import styles from "../../styles/Window.module.scss";

export const Grass = ({ children }: { children: JSX.Element }): JSX.Element => {
	const { level } = useGameContext();

	return (
		<div className={styles.grass}>
			<Image src='/images/grass.png' alt='grass' layout='fill' />
			<div className={styles.spawnGrid}>
				{level > 0 && <div> {children}</div>}
				{level > 1 && <div> {children}</div>}
				{level > 2 && <div> {children}</div>}
				{level > 3 && <div> {children}</div>}
				{level > 4 && <div> {children}</div>}
			</div>
			<div className={styles.spawnGridTwo}>
				{level > 5 && <div> {children}</div>}
				{level > 6 && <div> {children}</div>}
				{level > 7 && <div> {children}</div>}
				{level > 8 && <div> {children}</div>}
				{level > 9 && <div> {children}</div>}
			</div>
		</div>
	);
};
