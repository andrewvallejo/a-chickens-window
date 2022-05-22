import Image from "next/image";

import styles from "../styles/Window.module.scss";

export const Grass = () => {
	return (
		<div className={styles.grass}>
			<Image src='/images/grass.png' height={120} width={2800} alt='gras' />;
		</div>
	);
};
