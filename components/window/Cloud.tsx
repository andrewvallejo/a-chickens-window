import { motion } from "framer-motion";
import Image from "next/image";

import styles from "../../styles/Window.module.scss";

export const Cloud = ({ children }: { children: string }): JSX.Element => {
	const location = children === "high" ? styles.high : styles.low;

	return (
		<motion.div
			className={`${styles.cloud} ${location}`}
			animate={{
				x: [ -1500, 1500 ],
				y: [ 8, 4, 8 ]
			}}
			transition={{
				duration: 60,
				repeat: Infinity
			}}>
			<Image src='/images/cloud.png' layout='fill' alt='cloud' />
		</motion.div>
	);
};
