import { createRef, useEffect, useState } from "react";

import { useGameContext } from "../../context/GameContext";
import styles from "../../styles/MathProblem.module.scss";
import { Block } from "./Block";
import { FormBlock } from "./FormBlock";
import { Operator } from "./Operator";

export const MathProblem = (): JSX.Element => {
	const { result, addends } = useGameContext();

	return (
		<section className={styles.mathContainer}>
			<Block>{addends[0]}</Block>
			<Operator>+</Operator>
			<Block>{addends[1]}</Block>
			<Operator>=</Operator>
			<FormBlock>{result}</FormBlock>
		</section>
	);
};
