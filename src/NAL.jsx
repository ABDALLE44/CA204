import React from 'react'
import { useState } from 'react'
import Log1 from './imge/Off.jpg'
import log2 from './imge/On.jpg'
function NAL () {
    const [lamp, setlamp] = useState(false)
    const handleClick = () =>{
        setlamp(!lamp)
    }
    return (
        <div align="center">
            <img src={lamp? Log1:log2} className='w-3 mt-2' alt="" />
           
            <button onClick={handleClick}>{lamp?'On':'Off'}</button>
           
        </div>
      )
    }
    export default NAL