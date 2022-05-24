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
			initial={{ y: -250, opacity: 0 }}
			transition={{
				duration: 1,
				delay: 1,
				repeat: Infinity
			}}
			whileInView={{
				y: 0,
				opacity: 1,
				transition: {
					type: "spring",
					delay: 0.3,
					stiffness: 500,
					damping: 35
				}
			}}
			whileDrag={{
				scale: 1.5,
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
