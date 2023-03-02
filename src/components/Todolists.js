import React from 'react';

const Todolists = ({ todoLists, delTodoLists,onIsDoneToggle }) => {
    return (
        <div>
             <ul className='todoLists'>
                {todoLists.map(todo=><li key={todo.id} style={{color: todo.isDone ? '#ccc' : '#333'}}>
                {/* 자바스크립트 쓸 때는 중괄호 필수 ! */}
                <span onClick={()=> onIsDoneToggle(todo.id)}>{todo.text}</span>
                <button onClick={()=> delTodoLists(todo.id)}>X</button></li>)}
            </ul>
        </div>
    );
};

export default Todolists;