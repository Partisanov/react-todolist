import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import PropTypes from 'prop-types'
import "../styles/AddTodo.css";

function AddTodo({onCreate}) {
    const [value, setValue] = useState('')

    function submitHandler (event) {
        event.preventDefault()

        if(value.trim()) {
            onCreate(value)
            setValue('')
        }
    }
  return (
    <form className="add-form" onSubmit={submitHandler}>
      <TextField size="small" label="Новое дело" value={value} onChange={event => setValue(event.target.value)}/>
      <Button variant="outlined" type="submit">Добавить</Button>
    </form>
  );
}

AddTodo.propTypes ={
    onCreate: PropTypes.func.isRequired
}

export default AddTodo