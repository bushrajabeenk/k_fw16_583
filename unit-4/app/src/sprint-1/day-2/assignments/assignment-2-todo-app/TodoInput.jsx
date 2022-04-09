import React, { useState } from 'react';


function TodoInput({ handleAdd }) {

    const [inp, setInp] = useState("");


    const handleChange = (e) => {
        //console.log(e.target.value);
        // const { value } = e.target;
        setInp(e.target.value);
    };

    return (
        <>
            <div>
                <input 
                    type="text" 
                    placeholder="type something" 
                    value={inp} 
                    onChange={handleChange} 
                />
            </div>
            <div>
                <button 
                    onClick={() => handleAdd(inp)}
                >
                ADD
                </button>
            </div>
        </>
    )
}

export default TodoInput;