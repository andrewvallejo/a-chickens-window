import { motion } from "framer-motion";
import Image from "next/image";

import styles from "../../styles/Window.module.scss";

export const Chicken = (): JSX.Element => {
	return (
		<motion.div
			whileTap={{
				scale: 1.2,
				transition: {
					duration: 0.2,
					ease: "easeInOut"
				}
			}}
			drag={true}
			dragConstraints={{
				top: 20,
				bottom: 30
			}}
			dragElastic={0.2}>
			<div className={styles.chicken}>
				<div className={styles.spritesheet}>
					<Image src='/images/chicken-sheet.png' height={280} width={656} alt='chicken' />
				</div>
			</div>
		</motion.div>
	);
};
