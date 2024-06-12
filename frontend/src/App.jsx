import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
import React from 'react'

function App() {
  const [todos, setTodos] = React.useState([]);
  React.useEffect(function() {
    fetch('http://localhost:3000/todos')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      setTodos(data.todos);
    });
  }, []);
  return (
    <div>
      <CreateTodo/>
      <Todos todos={todos}></Todos>
    </div>
  )
}
export default App