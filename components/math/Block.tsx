import { motion } from "framer-motion";
import { useState } from "react";

import styles from "../../styles/Math.module.scss";
import { FormBlock } from "./FormBlock";

export const Block = ({ children }: { children: [number, string] }): JSX.Element => {
	return (
		<motion.article
			className={styles.block}
			animate={{
				y: [ 8, 4, 8 ]
			}}
			transition={{
				repeat: Infinity,
				duration: 5
			}}>
			{children[1] === "form" ? (
				<FormBlock>{children[0]}</FormBlock>
			) : (
				<p className={styles.number}>{children[0]}</p>
			)}
		</motion.article>
	);
};
