import { List } from "@mui/material";
import React from "react";
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <List>
      {props.todos.map((todo) => {
        return <TodoItem todo={todo} key={todo.id}/>;
      })}
    </List>
  );
}
TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default TodoList;
