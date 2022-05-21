import styles from "../styles/MathProblem.module.scss";

export const MathProblem = (): JSX.Element => {
	return (
		<section className={styles.mathContainer}>
			<article className={styles.block}>
				<p>2</p>
			</article>
			<p className={styles.operator}>+</p>
			<article className={styles.block}>
				<p>2</p>
			</article>
			<p className={styles.operator}>=</p>
			<article className={styles.block}>
				<p>4</p>
			</article>
		</section>
	);
};
