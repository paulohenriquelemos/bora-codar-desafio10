import { Home } from './pages/Home'

import './styles/global.css'

import bgImage from './assets/background.svg'

export function App() {
  return (
    <div className="bg-background w-full p-6 sm:p-14 lg:h-screen flex justify-center items-center">
      <Home />
      <img src={bgImage} alt="" className=" fixed w-full bottom-0" />
    </div>
  )
}
