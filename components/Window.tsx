import styles from "../styles/Window.module.scss";
import { Chicken } from "./Chicken";
import { Cloud } from "./Cloud";
import { Grass } from "./Grass";

export const Window = (): JSX.Element => {
	return (
		<section className={styles.window}>
			<div className={styles.sun} />
			<Cloud>high</Cloud>
			<Cloud>low</Cloud>
			<Chicken />
			<Grass />
		</section>
	);
};
