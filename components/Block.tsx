import styles from "../styles/MathProblem.module.scss";

export const Block = ({ children }: { children: number }) => {
	return (
		<article className={styles.block}>
			<p className={styles.number}>{children}</p>
		</article>
	);
};