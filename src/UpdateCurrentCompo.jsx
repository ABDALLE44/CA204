import React, {useState} from "react";
const UpdateCurrent =()=>{
    const [previous, setPrevious] = useState(0);
    const [current, setCurrent] = useState(1);

    const update =()=>{
        setPrevious(previous +1);
        setCurrent(current +1);
    }
    return(
        <div className="updateCurrent">
            <h1>previous {previous}</h1>
            <h1>current{current}</h1>
            <button onClick={update}update>Update</button>
        </div>
    )
}
export default UpdateCurrent;