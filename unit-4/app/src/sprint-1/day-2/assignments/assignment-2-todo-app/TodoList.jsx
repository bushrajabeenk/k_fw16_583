import React from 'react';
import TodoItem from './TodoItem';


function TodoList({ todos, handleDel }) {

    // , handleToggle
    return (
        <>
            <div>
                {todos.map((el) => {
                    return <TodoItem handleDel={handleDel}  key={el.id} {...el} />
                    // handleToggle={handleToggle}
                })}
            </div>
        </>
    )
}

export default TodoList;