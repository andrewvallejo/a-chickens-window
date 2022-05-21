import { createRef, useEffect, useState } from "react";

import { getRandomPair } from "../lib/math";
import styles from "../styles/MathProblem.module.scss";

export const MathProblem = (): JSX.Element => {
	const [ pending, setPending ] = useState(true);
	const [ addend, setAddends ] = useState([ 0, 0 ]);
	const [ result, setResult ] = useState(0);
	const [ input, setInput ] = useState(0);
	const inputRef = createRef<HTMLInputElement>();

	useEffect(
		() => {
			if (pending) {
				setAddends(getRandomPair());
				setPending(false);
			}
			if (addend) {
				setResult(addend[0] + addend[1]);
			}

			if (inputRef.current) {
				inputRef.current.focus();
			}
		},
		[ addend, inputRef, pending ]
	);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (!input) {
			setInput(0);
		}
		if (input === result) {
			setPending(true);
			setInput(0);
		}
	};

	return (
		<section className={styles.mathContainer}>
			<article className={styles.block}>
				<p className={styles.number}>{addend[0]}</p>
			</article>
			<p className={styles.operator}>+</p>
			<article className={styles.block}>
				<p className={styles.number}>{addend[1]}</p>
			</article>
			<p className={styles.operator}>=</p>
			<article className={styles.block}>
				<form className={styles.resultsForm} onSubmit={handleSubmit}>
					<input
						className={styles.resultsInput}
						type='number'
						ref={inputRef}
						value={input || ""}
						onChange={(e) => setInput(parseInt(e.target.value))}
					/>
				</form>
			</article>
		</section>
	);
};
