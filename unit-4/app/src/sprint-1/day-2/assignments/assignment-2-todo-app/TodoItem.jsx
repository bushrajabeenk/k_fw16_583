import React from 'react';
import "./TodoItem.css";


function TodoItem({ title, id, status, handleDel}) {

    // , handleToggle 

    return (
        <>
            <div className="divFi" >
                <h3>{title}</h3>
          
                {title} - {status ? "Done" : "Not Done"}
                {/* <button onClick={() => handleToggle(id)} >Toggle</button> */}
                
                <button className="btn" onClick={() => handleDel(id)} >Delete</button>
            </div>
        </>
    )
}

export default TodoItem;