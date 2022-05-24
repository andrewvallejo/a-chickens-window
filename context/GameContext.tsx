import { createContext, useContext, useMemo, useState } from "react";

const GameContext = createContext<{
	pending: boolean;
	isGameOver: boolean;
	level: number;
	addends: [number, number];
	result: number;
	answer: string;
	setPending: (pending: boolean) => void;
	setIsGameOver: (isGameOver: boolean) => void;
	setLevel: (level: number) => void;
	setAddends: (addends: [number, number]) => void;
	setResult: (result: number) => void;
	setAnswer: (answer: string) => void;
}>({
	pending: true,
	isGameOver: false,
	level: 0,
	addends: [ 0, 0 ],
	answer: "",
	result: 0,
	setPending: () => {},
	setIsGameOver: () => {},
	setLevel: () => {},
	setAddends: () => {},
	setResult: () => {},
	setAnswer: () => {}
});

export const GameWrapper = ({ children }: { children: React.ReactNode }): JSX.Element => {
	const [ pending, setPending ] = useState<boolean>(false);
	const [ isGameOver, setIsGameOver ] = useState<boolean>(false);
	const [ level, setLevel ] = useState<number>(0);
	const [ result, setResult ] = useState<number>(0);
	const [ addends, setAddends ] = useState<[number, number]>([ 0, 0 ]);
	const [ answer, setAnswer ] = useState<string>("");

	const context = useMemo(
		() => ({
			pending,
			isGameOver,
			level,
			addends,
			result,
			answer,
			setPending,
			setIsGameOver,
			setLevel,
			setAddends,
			setResult,
			setAnswer
		}),
		[ pending, isGameOver, level, addends, result, answer ]
	);

	return <GameContext.Provider value={context}>{children}</GameContext.Provider>;
};

export const useGameContext = () => useContext(GameContext);
