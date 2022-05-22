import { motion } from "framer-motion";

import styles from "../../styles/Window.module.scss";
import { Chicken } from "./Chicken";
import { Cloud } from "./Cloud";
import { Grass } from "./Grass";

export const Window = (): JSX.Element => {
	return (
		<motion.section
			className={styles.window}
			initial='hidden'
			animate='visible'
			variants={{
				hidden: { scale: 0.8, opacity: 0, width: 0 },
				visible: { scale: 1, opacity: 1, width: "100%", transition: { delay: 0.25, duration: 1.25 } }
			}}>
			<div className={styles.sun} />
			<Cloud>high</Cloud>
			<Cloud>low</Cloud>
			<Grass>
				<Chicken />
			</Grass>
		</motion.section>
	);
};
