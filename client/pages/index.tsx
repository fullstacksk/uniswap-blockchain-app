import type { NextPage } from 'next'
import Header from '../components/Header'

const style = {
  wrapper:
    'h-screen max-h-screen h-min-screen w-screen bg-[#2D242F] text-white select-none flex flex-col justify-between',
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <h1>Main</h1>
      <h1>Transaction History</h1>
    </div>
  )
}

export default Home
