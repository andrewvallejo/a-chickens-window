import Image from "next/image";

import styles from "../../styles/Window.module.scss";

export const Cloud = ({ children }: { children: string }): JSX.Element => {
	const location = children === "high" ? styles.high : styles.low;

	return (
		<div className={`${styles.cloud} ${location}`}>
			<Image src='/images/cloud.png' height={50} width={400} alt='cloud' />
		</div>
	);
};
