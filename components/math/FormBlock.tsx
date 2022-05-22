import { createRef, useEffect, useState } from "react";

import { useGameContext } from "../../context/GameContext";
import styles from "../../styles/Math.module.scss";

export const FormBlock = ({ children }: { children: number }): JSX.Element => {
	const { level, setLevel, answer, setAnswer, result } = useGameContext();

	const inputRef = createRef<HTMLInputElement>();

	useEffect(
		() => {
			if (inputRef.current) {
				inputRef.current.focus();
			}
		},
		[ answer, inputRef ]
	);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		const guess = parseInt(answer, 10);

		if (guess === result) {
			setLevel(level + 1);
		}

		if (inputRef.current) {
			inputRef.current.focus();
		}
	};

	return (
		<article className={styles.block}>
			<form className={styles.resultsForm} onSubmit={handleSubmit}>
				<input
					className={styles.resultsInput}
					type='number'
					ref={inputRef}
					min={0}
					max={100}
					value={children || ""}
					onChange={(e) => e.target.value.length <= 2 && setAnswer(e.target.value)}
				/>
			</form>
		</article>
	);
};
