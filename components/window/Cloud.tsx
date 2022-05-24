import { motion } from "framer-motion";
import Image from "next/image";

import styles from "../../styles/Window.module.scss";

export const Cloud = ({ children }: { children: string }): JSX.Element => {
	const location = children === "high" ? styles.high : styles.low;

	return (
		<motion.div
			className={`${styles.cloud} ${location}`}
			initial={{ opacity: 0.8 }}
			animate={{ opacity: 0.5 }}
			transition={{ repeat: Infinity, duration: 6, repeatType: "mirror" }}>
			<Image src='/images/cloud.png' layout='fill' alt='cloud' />
		</motion.div>
	);
};
