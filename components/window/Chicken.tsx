import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

import { useGameContext } from "../../context/GameContext";
import styles from "../../styles/Window.module.scss";

export const Chicken = (): JSX.Element => {
	const { level } = useGameContext();

	const variants = {
		normal: {},
		gameOver: { filter: [ "hue-rotate(0deg)", "hue-rotate(360deg)" ] }
	};

	return (
		<motion.div
			className={styles.chicken}
			animate={level === 10 ? "gameOver" : "normal"}
			variants={variants}
			transition={{
				duration: 1,
				repeat: Infinity
			}}
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
			<div className={styles.spritesheet}>
				<Image src='/images/chicken-sheet.png' height={280} width={656} alt='chicken' />
			</div>
		</motion.div>
	);
};
