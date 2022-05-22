import { createRef, useEffect, useState } from "react";

import { getRandomPair } from "../lib/math";
import styles from "../styles/MathProblem.module.scss";
import { Block } from "./Block";
import { FormBlock } from "./FormBlock";
import { Operator } from "./Operator";

export const MathProblem = (): JSX.Element => {
	const [ pending, setPending ] = useState(true);
	const [ addend, setAddends ] = useState([ 0, 0 ]);
	const [ result, setResult ] = useState(0);

	useEffect(
		() => {
			if (pending) {
				setAddends(getRandomPair());
				setPending(false);
			}
			if (addend) {
				setResult(addend[0] + addend[1]);
			}
		},
		[ addend, pending ]
	);

	return (
		<section className={styles.mathContainer}>
			<Block>{addend[0]}</Block>
			<Operator>+</Operator>
			<Block>{addend[1]}</Block>
			<Operator>=</Operator>
			<FormBlock>{result}</FormBlock>
		</section>
	);
};
