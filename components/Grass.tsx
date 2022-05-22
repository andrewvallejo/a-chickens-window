import Image from "next/image";

import styles from "../styles/Window.module.scss";

export const Grass = ({ children }: { children: JSX.Element }) => {
	return (
		<div className={styles.grass}>
			<div className={styles.peter}>{children}</div>
			<div className={styles.mary}>{children}</div>
			<Image src='/images/grass.png' height={120} width={2800} alt='gras' />;
		</div>
	);
};
