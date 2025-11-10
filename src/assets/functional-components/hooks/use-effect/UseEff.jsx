import React, { useEffect, useState } from 'react'

const UseEff = () => {
    const [seconds,setSeconds] = useState(0);
    useEffect(()=>{
        const interval = setInterval(() => {
            setSeconds((s) => s+1);
        }, 1000);

        //cleanup function - unmount
        return () => clearInterval(interval);

    },[])  //empty dependency array - run once on mount
  return (
    <div>
      <p>Timer : {seconds} seconds</p>
    </div>
  )
}

export default UseEff
