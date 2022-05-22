import { motion } from "framer-motion";

import styles from "../../styles/Math.module.scss";
import { FormBlock } from "./FormBlock";

export const Block = ({ children }: { children: number }): JSX.Element => {
	return (
		<motion.article
			animate={{
				y: [ 8, 4, 8 ]
			}}
			transition={{
				repeat: Infinity,
				duration: 5
			}}
			className={styles.block}>
			<p className={styles.number}>{children}</p>
			<FormBlock>{children}</FormBlock>
		</motion.article>
	);
};
