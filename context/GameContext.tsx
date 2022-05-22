import { createContext, useContext, useMemo, useState } from "react";

const GameContext = createContext<{
	setPending: (pending: boolean) => void;
	level: number;
	addends: [number, number];
	result: number;
	answer: string;
	pending: boolean;
	setLevel: (level: number) => void;
	setAddends: (addends: [number, number]) => void;
	setResult: (result: number) => void;
	setAnswer: (answer: string) => void;
}>({
	setPending: () => {},
	level: 0,
	addends: [ 0, 0 ],
	answer: "",
	result: 0,
	pending: true,
	setLevel: () => {},
	setAddends: () => {},
	setResult: () => {},
	setAnswer: () => {}
});

export const GameWrapper = ({ children }: { children: React.ReactNode }): JSX.Element => {
	const [ pending, setPending ] = useState<boolean>(false);
	const [ level, setLevel ] = useState<number>(0);
	const [ result, setResult ] = useState<number>(0);
	const [ addends, setAddends ] = useState<[number, number]>([ 0, 0 ]);
	const [ answer, setAnswer ] = useState<string>("");

	const context = useMemo(
		() => ({ pending, level, addends, result, answer, setPending, setLevel, setAddends, setResult, setAnswer }),
		[ level, addends, result, answer, pending ]
	);

	return <GameContext.Provider value={context}>{children}</GameContext.Provider>;
};

export const useGameContext = () => useContext(GameContext);
