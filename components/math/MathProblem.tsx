import { motion } from "framer-motion";

import { useGameContext } from "../../context/GameContext";
import styles from "../../styles/Math.module.scss";
import { Block } from "./Block";
import { Operator } from "./Operator";

export const MathProblem = (): JSX.Element => {
	const { answer, addends } = useGameContext();

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
						staggerChildren: 1,
						delay: 2.35,
						duration: 1,
						type: "spring",
						stiffness: 85
					}
				}
			}}>
			<Block>{[ addends[0], "addend" ]}</Block>
			<Operator>+</Operator>
			<Block>{[ addends[1], "addend" ]}</Block>
			<Operator>=</Operator>
			<Block>{[ parseInt(answer), "form" ]}</Block>
		</motion.section>
	);
};
