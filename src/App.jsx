import { useState } from "react";
import "./App.scss";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no sistema",
      category: "Trabalho",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudos",
      isCompleted: true,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        isCompleted: false,
      },
    ];

    setTodos(newTodos);
  };

  const removeTodo = (id) => {
  //Criando um novo array de todos, e preservando o original
   const newTodos = [...todos];

   //Filtrando o array de todos, criando um novo array sem os todos removidos
   const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);

   //Atualizando o estado de todos com o novo array
   setTodos(filteredTodos);
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo_list">
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
}

export default App;
