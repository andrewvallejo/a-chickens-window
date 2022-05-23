import { motion } from "framer-motion";

import styles from "../styles/Math.module.scss";

export const GameOver = (): JSX.Element => {
	return (
		<motion.section
			className={styles.mathContainer}
			initial='hidden'
			animate='visible'
			variants={{
				hidden: { opacity: 0, translateY: "400px" },
				visible: {
					opacity: 1,
					translateY: 0,
					transition: {
						duration: 2
					}
				}
			}}>
			<motion.h2
				className={styles.gameOver}
				animate={{
					filter: [ "hue-rotate(0deg)", "hue-rotate(360deg)" ],
					scale: [ 1, 1.2, 1 ],
					transition: { duration: 8, repeat: Infinity, delay: 1 }
				}}>
				GameOver!
			</motion.h2>
		</motion.section>
	);
};
