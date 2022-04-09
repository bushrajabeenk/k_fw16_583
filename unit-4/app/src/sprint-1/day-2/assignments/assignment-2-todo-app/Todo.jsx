import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import TodoList from './TodoList';
import TodoInput from './TodoInput';


function Todo() 
{
    const [todos, setTodos] = useState([]);
    

    const handleAdd = (data) => {
      const rnd = {
        title: data,
        status: false,
        id: uuid()
      };
      // let newArrtodos = [ ...todos, data ];
      // setTodos(newArrtodos);
      // OR
      setTodos( [ ...todos, rnd ] );
    };

    const handleDel = (id) => {
      let updatedtodos = todos.filter(item => item.id !== id) 
      setTodos(updatedtodos);
    };

    // const handleToggle = (id) => {
    //   let updatedtodos = todos.filter((item) => {
    //     if(item.id === id) {
    //       item.status = true;
    //     }
    //   })
    //     setTodos(updatedtodos); 
    // };

    // handleToggle={handleToggle}


    return (
        <>
            <h1>Todos</h1>
            {/* separate component for taking input values and adding button */}
            <TodoInput handleAdd={handleAdd} />
            <br />
            <TodoList handleDel={handleDel}  todos={todos} />
        </>
    )
}

export default Todo;