import ToDoList from './assets/TodoList'
import todos from './assets/data/todos'
import './App.css'

function App() {

  return (
    <>
    <h1>My ToDos</h1>
    <ToDoList todosArr={todos}/>
    </>
  )
}

export default App
