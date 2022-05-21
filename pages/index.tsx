import { Layout } from "../components/Layout";
import { MathProblem } from "../components/MathProblem";
import { Window } from "../components/Window";

import type { NextPage } from 'next'
const Home: NextPage = () => {
  return (
      <Layout>
        <MathProblem />
        <Window/>
      </Layout>
  )
}

export default Home
