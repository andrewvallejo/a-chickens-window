import Image from "next/image";

import chickens from "../styles/Chicken.module.scss";
import styles from "../styles/Window.module.scss";

export const Grass = ({ children }: { children: JSX.Element }) => {
	return (
		<div className={styles.grass}>
			<div className={chickens.peter}>{children}</div>
			<div className={chickens.mary}>{children}</div>
			<Image src='/images/grass.png' height={120} width={2800} alt='gras' />;
		</div>
	);
};
