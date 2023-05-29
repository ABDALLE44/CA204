import React, { useState } from 'react'
function LIST(){
    const [value, setValue] = useState()
    const [Name, setName] = useState([]);

    const handleClick = () =>{
        if(value !== '' && Name !== '' ){
            setName([...Name, value])
            setValue("")
        }
    }
  return (
    <div className="App">
        <div>
        <input type="text" placeholder="Enter the Name"
        onChange={(e) => setValue(e.target.value)} value={value}/>
        <button onClick={handleClick}> Add </button>
        </div>
        <div>
          <ol>
            {Name.map(Names => <li>{Names}</li>)}
          </ol>
        </div>
    </div>
  )
}
export default LIST