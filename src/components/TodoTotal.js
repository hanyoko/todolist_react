import React, { useState } from 'react';
import "./TodoTotal.css";

const TodoTotal = () => {
    //인풋의 값 관리, 버튼클릭시 할일목록 추가
    const [inputText, setInputText] = useState("");      //구조분해할당     아래의 const 3줄과 같다
    // const inputTextArr = useState("");
    // console.log(inputTextArr);
    // const inputText = inputTextArr[0];
    // const setInputText = inputTextArr[1]
    //할일리스트 상태관리
    const [ todoLists, setTodoLists ] = useState([
        {id: 1, text: "할일1"},
        {id: 2, text: "할일2"},
    ]);
    const onAddTodo = () => {
        const newTodoLists = [
            ...todoLists,
            {id: todoLists.length+1, text: inputText}
        ]
        setTodoLists(newTodoLists);
        setInputText("");
    }
    const onChange = (e) => {
        setInputText(e.target.value);
        console.log(inputText);
    }
    const delTodoLists = (id) => {
        const newTodoLists = todoLists.filter(todo=> todo.id !== id);
        setTodoLists(newTodoLists);
    }
    return (
        <div className='todo'>
            <div className='header'>
                <h2>To do List</h2>
                <div>
                    <input value={inputText} onChange={onChange} />
                    <button onClick={onAddTodo}>+</button>
                </div>
            </div>
            <div>
                <ul className='todoLists'>
                    {todoLists.map(todo=><li key={todo.id}>{todo.text}
                    {/* 자바스크립트 쓸 때는 중괄호 필수 ! */}
                    <button onClick={()=> delTodoLists(todo.id)}>X</button></li>)}
                </ul>
            </div>
        </div>
    );
};

export default TodoTotal;