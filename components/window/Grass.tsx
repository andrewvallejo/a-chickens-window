import Image from "next/image";

import { useGameContext } from "../../context/GameContext";
import chickens from "../../styles/Chicken.module.scss";
import styles from "../../styles/Window.module.scss";

export const Grass = ({ children }: { children: JSX.Element }): JSX.Element => {
	const { level } = useGameContext();

	return (
		<div className={styles.grass}>
			{level > 0 && <div className={chickens.peter}>{children}</div>}
			{level > 1 && <div className={chickens.mary}>{children}</div>}
			{level > 2 && <div className={chickens.andrew}>{children}</div>}
			{level > 3 && <div className={chickens.eron}>{children}</div>}
			{level > 4 && <div className={chickens.roy}>{children}</div>}
			{level > 5 && <div className={chickens.bob}>{children}</div>}
			{level > 6 && <div className={chickens.maroni}>{children}</div>}
			{level > 7 && <div className={chickens.bobJr}>{children}</div>}
			{level > 8 && <div className={chickens.joshua}>{children}</div>}
			{level > 9 && <div className={chickens.shayan}>{children}</div>}
			<Image src='/images/grass.png' height={120} width={2800} alt='gras' />;
		</div>
	);
};
