import styles from "../styles/Window.module.scss";
import { Cloud } from "./Cloud";
import { Grass } from "./Grass";

export const Window = (): JSX.Element => {
	return (
		<section className={styles.window}>
			<div className={styles.sun} />
			<Cloud>high</Cloud>
			<Cloud>low</Cloud>
			<Grass />
		</section>
	);
};
