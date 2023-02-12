import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import Context from "./context";

function App() {
  //Создаем State,проверяем наличие массива в LocalStorage, если нет,создаем пустой массив
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  //Следим за состоянием массива дел,при изменении обновляем запись в LocalStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  //Изменение дела (выполнено\не выполнено)
  function checkedTodo(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  //Удаление дела
  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  //Добавление дела
  function addTodo(title) {
    setTodos(
      todos.concat([
        {
          title,
          id: Date.now(),
          completed: false,
        },
      ])
    );
  }

  return (
    <Context.Provider value={{ removeTodo, checkedTodo }}>
      <Container maxWidth="sm">
        <h1>Менеджер дел</h1>
        <AddTodo onCreate={addTodo} />
        {todos.length ? <TodoList todos={todos} /> : <h3>Список дел пуст</h3>}
      </Container>
    </Context.Provider>
  );
}

export default App;
