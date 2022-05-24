import { motion } from "framer-motion";

import { useGameContext } from "../context/GameContext";
import styles from "../styles/Home.module.scss";

export const GameOver = (): JSX.Element => {
	const { setIsGameOver, setLevel } = useGameContext();

	const handleClick = (): void => {
		setIsGameOver(false);
		setLevel(0);
	};

	return (
		<motion.ul
			className={styles.gameOverContainer}
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
				className={styles.gameOverTitle}
				animate={{
					filter: [ "hue-rotate(0deg)", "hue-rotate(360deg)" ],
					scale: [ 1, 1.2, 1 ],
					transition: { duration: 8, repeat: Infinity, delay: 1 }
				}}>
				Winner!!
			</motion.h2>

			<motion.button
				className={styles.gameOverButton}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1, transition: { duration: 0.5, delay: 2 } }}
				onClick={handleClick}>
				Try again?
			</motion.button>
		</motion.ul>
	);
};
