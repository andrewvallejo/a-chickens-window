import { useEffect, useState } from "react";

import { Layout } from "../components/Layout";
import { MathProblem } from "../components/MathProblem";
import { Window } from "../components/Window";
import { useGameContext } from "../context/GameContext";
import { getRandomPair } from "../lib/math";

import type { NextPage } from 'next'
const Home: NextPage = () => {
  const [ currentLevel, setCurrentLevel ] = useState(0);

	const { level, addends, pending } = useGameContext();
	const { setResult, setAddends, setPending } = useGameContext();

	useEffect(
		() => {
			if (pending ||(addends[0] === 0 && addends[1] === 0)) {
				setCurrentLevel(level);
				setPending(false);
				setAddends(getRandomPair());
			}
      if (!pending) {
				setResult(addends[0] + addends[1]);
     }
			if (currentLevel !== level) {
				setPending(true);
				setCurrentLevel(level);
			}
		},
		[ addends, currentLevel, level, pending, setAddends, setPending, setResult ]
	);


  return (
      <Layout>
        <MathProblem />
        <Window/>
      </Layout>
  )
}

export default Home
