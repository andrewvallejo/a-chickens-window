import { motion } from "framer-motion";
import { createRef, useEffect, useState } from "react";

import { useGameContext } from "../../context/GameContext";
import styles from "../../styles/Math.module.scss";

export const FormBlock = ({ children }: { children: number }): JSX.Element => {
	const { level, setLevel, answer, setAnswer, result } = useGameContext();
	const [ currentLevel, setCurrentLevel ] = useState(level);
	const [ isCorrect, setIsCorrect ] = useState(false);

	const inputRef = createRef<HTMLInputElement>();

	useEffect(
		() => {
			if (inputRef.current) {
				inputRef.current.focus();
			}
			if (currentLevel === level) {
				setCurrentLevel(level + 1);
				setIsCorrect(true);
				setTimeout(() => {
					setIsCorrect(false);
				}, 1000);
			}
		},
		[ answer, currentLevel, inputRef, level ]
	);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const guess = parseInt(answer, 10);

		if (guess === result) {
			setLevel(level + 1);
			setAnswer("");
		}

		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<article className={styles.block}>
			<form className={styles.resultsForm} onSubmit={handleSubmit}>
				{!isCorrect ? (
					<input
						className={styles.resultsInput}
						type='number'
						ref={inputRef}
						min={0}
						max={100}
						value={children || ""}
						onChange={(e) => e.target.value.length <= 2 && setAnswer(e.target.value)}
					/>
				) : (
					<motion.div
						className={styles.resultsInput}
						initial='hidden'
						animate='visible'
						variants={{
							hidden: { opacity: 0, scale: 0.2 },
							visible: {
								opacity: 1,
								scale: 1,
								transition: {
									duration: 0.5,
									type: "spring",
									stiffness: 100
								}
							}
						}}>
						<p className={styles.checkmark}>✔</p>
					</motion.div>
				)}
			</form>
		</article>
	);
};
