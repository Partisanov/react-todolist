import React, { useContext } from "react";
import '../styles/TodoItem.css'
import Context from "../context";
import DeleteIcon from '@material-ui/icons/Delete';
import {
  Checkbox,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  ListItemSecondaryAction,
} from "@mui/material";
import PropTypes from 'prop-types'

function TodoItem({todo}) {
  const {removeTodo, checkedTodo} = useContext(Context)
  const classes = []

  if(todo.completed) {
    classes.push('done')
  }
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox 
          checked={todo.completed}
          onChange={checkedTodo.bind(null, todo.id)}  
        />
      </ListItemIcon>
      <ListItemText primary={todo.title} className={classes.join(' ')}/>
      <ListItemSecondaryAction>
        <IconButton onClick={removeTodo.bind(null, todo.id)}><DeleteIcon/></IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default TodoItem;
