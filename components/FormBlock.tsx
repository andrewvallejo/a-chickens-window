import { createRef, useEffect, useState } from "react";

import styles from "../styles/MathProblem.module.scss";

export const FormBlock = ({ children }: { children: number }) => {
	const inputRef = createRef<HTMLInputElement>();

	const [ input, setInput ] = useState(0);

	useEffect(
		() => {
			if (inputRef.current) {
				inputRef.current.focus();
			}
		},
		[ inputRef ]
	);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		if (!input) {
			setInput(0);
		}
		// if (input === children) {
		// 	setPending(true);
		// 	setInput(0);
		// }
	};

	return (
		<article className={styles.block}>
			<form className={styles.resultsForm} onSubmit={handleSubmit}>
				<input
					className={styles.resultsInput}
					type='number'
					ref={inputRef}
					value={input || ""}
					onChange={(e) => setInput(parseInt(e.target.value))}
				/>
			</form>{" "}
		</article>
	);
};
