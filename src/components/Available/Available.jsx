import React, { use } from 'react';
import userImg from "../../assets/user 1.png"
import flagImg from "../../assets/Vector.png"

const Available = ({playerPromise}) => {
    const playerData=use(playerPromise)
    console.log(playerData)

    return (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 container mx-auto gap-5">

            {
                playerData.map(player=><div className="card bg-base-100 shadow-sm p-5 mt-5 w-96">
  <figure>
    <img className='w-[220px] h-[250px] object-cover rounded-[10px]'
      src={player.photo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='flex gap-3'>
        <img src={userImg} alt="" />
        <h2 className="card-title">{player.name}</h2>
    </div>

    <div className='flex gap-2 justify-center items-center'>
        <img className='w-[17px] h-[20px]' src={flagImg} alt="" />
        <p className='font-semibold'>{player.country}</p>
        <p className='btn'>All-rounder</p>
    </div>
    <div className='flex justify-between'>
        <p className='font-semibold'>Rating</p>
        <p className='font-semibold text-right'>{player.rating}</p>
    </div >
       
    <div className='flex justify-between'>
         <p className='font-semibold'>{player.batting_role}</p>
        <p className='font-semibold text-right'>{player.bowling_role}</p>
    </div>
    <div className='flex justify-between'>
        <p className='font-semibold'>Price: ${player.price_usd}</p>
        <p className='btn'>Choose Player</p>
    </div>
  </div>
</div>)
            }
            

        </div>
    );
};

export default Available;