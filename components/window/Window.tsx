import { motion } from "framer-motion";

import styles from "../../styles/Window.module.scss";
import { Chicken } from "./Chicken";
import { Cloud } from "./Cloud";
import { Grass } from "./Grass";

export const Window = (): JSX.Element => {
	return (
		<motion.section
			className={styles.window}
			animate={{
				y: [ 12, 8, 12 ]
			}}
			transition={{
				repeat: Infinity,
				repeatDelay: 2,
				duration: 8
			}}>
			<div className={styles.sun} />
			<Cloud>high</Cloud>
			<Cloud>low</Cloud>
			<Grass>
				<Chicken />
			</Grass>
		</motion.section>
	);
};
