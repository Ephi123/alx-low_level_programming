import React, { useEffect, useState } from 'react'

function Timer() {
  const [time,setTime] = useState(0)
  const [timeFormat,setTimeFormat] = useState("no focus")
  let[Second,setScond] = useState(0)

  const countDown = (second) =>{ 
         const minute  = Math.floor(second/60)
         const sec = second % 60

             if(minute < 10){
                if(sec < 10)
                     setTimeFormat(`0${minute}:0${sec}`)
                else
                setTimeFormat(`0${minute}:${sec}`)
             }
             else{
                if(sec < 10)
                    setTimeFormat(`${minute}:0${sec}`)
                else
                  setTimeFormat(`${minute}:${sec}`)
             }
             
            }
           
            if(Second<=0){ 
                  clearInterval(setScond)
                }

  function tenMiute(){
    setTime(10)
    setTimeFormat('10:00')
    setScond(10*60)

  }

  useEffect(
    ()=>{
   
  
        countDown(Second)
        
    },
    [Second]
  )
  return (
    <div className='flex flex-col justify-center items-center'>
        <p className='m-3 text-xl text-amber-400 rounded-full p-20 bg-white'>
            {timeFormat }
            </p>
        <div className='flex'>

        
        <button onClick={tenMiute} className='bg-red-800 rounded-lg p-1 m-2'>10 minute</button>
        <button onClick={()=>setTime(20)}  className='bg-red-800 rounded-lg p-1 m-2'>20 minute</button>
        </div>
        <button onClick={()=>setScond(60*10)} className='bg-red-800 rounded-lg p-1 m-2'>start</button>
        <button  className='bg-red-800 rounded-lg p-1 m-2'>{Second}</button>
    </div>
  )
}

export default Timer