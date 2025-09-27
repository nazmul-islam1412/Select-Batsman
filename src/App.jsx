
import { Suspense, useState } from 'react'
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
  const [toggle,setToggle]=useState(true)
  const playerPromise=fetchPlayers();
  return (
    <>
    
    <Navbar></Navbar>
    <Banner></Banner>
    {/* 2 Button */}
    <div className='flex justify-between items-center mt-10 container mx-auto'>
      <h1 className='font-bold text-[28px]'>Available Players</h1>
      <div className='flex'>
       <button  onClick={() => setToggle(true)}  className={`p-2 border border-gray-200 rounded-l-xl border-r-0 cursor-pointer  ${toggle === true ? "bg-[#E7FE29] font-semibold" : ""}`}>Available</button>
                                    
        <button  onClick={() => setToggle(false)}  className={`p-2 border border-gray-200 rounded-r-xl border-l-0 cursor-pointer  ${toggle === false ? "bg-[#E7FE29] font-semibold" : ""}`}>Selected <span>(0)</span></button>
      </div>
    </div>
    {
      toggle===true ? <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
      <Available playerPromise={playerPromise}></Available>
    </Suspense> : <Selected></Selected>
    }
    
    
    </>
  )
}

export default App;
