
import { Suspense } from 'react'
import './App.css'
import Available from './components/Available/Available'
import Banner from './components/Banner'
import Navbar from './components/Navbar'
import Selected from './components/Selected/Selected'

const fetchPlayers = async() =>{
        const res = await fetch("/players.json")
        return res.json();
}

function App() {
  const playerPromise=fetchPlayers();
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <Available playerPromise={playerPromise}></Available>
    </Suspense>
    {/* <Selected></Selected> */}
    </>
  )
}

export default App;
