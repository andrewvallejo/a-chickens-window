import { useEffect, useState } from "react";

import { GameOver } from "../components/GameOver";
import { Layout } from "../components/Layout";
import { MathProblem } from "../components/math/MathProblem";
import { Window } from "../components/window/Window";
import { useGameContext } from "../context/GameContext";
import { getRandomPair } from "../lib/math";

import type { NextPage } from 'next'
const Home: NextPage = () => {
  const [ currentLevel, setCurrentLevel ] = useState(0);
  const [ isGameOver, setGameOver ] = useState(false);

	const { level, addends, pending } = useGameContext();
	const { setResult, setAddends, setPending } = useGameContext();

	useEffect(
		() => {
			if (pending ||(addends[0] === 0 && addends[1] === 0)) {
				setCurrentLevel(level);
				setPending(false);
				setTimeout(() => {
					setAddends(getRandomPair());
				}, 1000);
			}
      if (!pending) {
				setResult(addends[0] + addends[1]);
     }
			if (currentLevel !== level) {
				setPending(true);
				setCurrentLevel(level);
			}
			if (level === 10) {
				setGameOver(true);
			}
		},
		[ addends, currentLevel, level, pending, setAddends, setPending, setResult ]
	);


  return (
      <Layout>
        {isGameOver ? <GameOver/>:<MathProblem />}
        <Window/>
      </Layout>
  )
}

export default Home
