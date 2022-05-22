import styles from "../styles/MathProblem.module.scss";

export const Operator = ({ children }: { children: string }) => {
	return <p className={styles.operator}>{children}</p>;
};
