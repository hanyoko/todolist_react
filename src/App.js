import './components/TodoTotal.css';
import {useState} from 'react';
import HeaderInput from './components/HeaderInput.js';
import Todolists from './components/Todolists.js';

function App() {
  const [ todoState, setTodoState ] = useState({
    todoLists: [
      {id: 1, text: "할일1"},
      {id: 2, text: "할일2"},
    ],
    inputText : ""
  });
  const [ id, setId ] = useState(3);
  const onChange = (e) => {
    setTodoState({
      ...todoState, //todoLists의 배열이 담긴 값
      inputText: e.target.value
    });
  }
  const onAddTodo = () => {
    const newTodoLists = [
        ...todoState.todoLists,
        { id: id, text: todoState.inputText, isDone: false }
    ]
    setTodoState({
      todoLists: newTodoLists,
      inputText: ""
    })
    setId(id+1);
    console.log(todoState.todoLists);
  }
  const delTodoLists = (id) => {
    const newTodoLists = todoState.todoLists.filter(todo=> todo.id !== id);
    setTodoState({
      ...todoState,
      todoLists: newTodoLists
    });
}
const onIsDoneToggle = (id) => {
  const newTodoLists = todoState.todoLists.map(todo=>
    todo.id === id ? { ...todo, isDone: !todo.isDone} : todo);
  setTodoState({
    ...todoState,
    todoLists: newTodoLists
  });
}
  return (
    <div className="App todo">
      <HeaderInput
      inputText={todoState.inputText}
      onChange={onChange}
      onAddTodo={onAddTodo} />
      <Todolists
      todoLists={todoState.todoLists}
      delTodoLists={delTodoLists} onIsDoneToggle={onIsDoneToggle}/>
    </div>
  );
}

export default App;
