import Image from "next/image";

import styles from "../styles/Chicken.module.scss";

export const Chicken = (): JSX.Element => {
	return (
		<div className={styles.chicken}>
			<div className={styles.spritesheet}>
				<Image src='/images/chicken-sheet.png' height={280} width={656} alt='chicken' />
			</div>
		</div>
	);
};
