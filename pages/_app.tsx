import "../styles/globals.scss";

import { GameWrapper } from "../context/GameContext";

import type { AppProps } from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
  return(
    <GameWrapper>
    <Component {...pageProps} />
    </GameWrapper>
    )
}

export default MyApp
