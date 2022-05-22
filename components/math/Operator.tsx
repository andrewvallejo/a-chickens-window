import styles from "../../styles/Math.module.scss";

export const Operator = ({ children }: { children: string }): JSX.Element => {
	return <p className={styles.operator}>{children}</p>;
};
