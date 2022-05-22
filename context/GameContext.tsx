import { createContext, useContext, useMemo, useState } from "react";

// create a context for game where the initial state is the game state
const GameContext = createContext<{
	setPending: (pending: boolean) => void;
	level: number;
	addends: [number, number];
	result: number;
	pending: boolean;
	setLevel: (level: number) => void;
	setAddends: (addends: [number, number]) => void;
	setResult: (result: number) => void;
}>({
	setPending: () => {},
	level: 0,
	addends: [ 0, 0 ],
	result: 0,
	pending: true,
	setLevel: () => {},
	setAddends: () => {},
	setResult: () => {}
});

export const GameWrapper = ({ children }: { children: React.ReactNode }) => {
	const [ level, setLevel ] = useState<number>(0);
	const [ result, setResult ] = useState<number>(0);
	const [ addends, setAddends ] = useState<[number, number]>([ 0, 0 ]);
	const [ pending, setPending ] = useState<boolean>(false);

	const context = useMemo(() => ({ level, addends, result, pending, setLevel, setAddends, setResult, setPending }), [
		level,
		addends,
		result,
		pending,
		setLevel,
		setResult,
		setPending
	]);

	return <GameContext.Provider value={context}>{children}</GameContext.Provider>;
};

export const useGameContext = () => {
	return useContext(GameContext);
};
