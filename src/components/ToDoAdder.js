import React, { useState, useRef } from "react";
import { Box, TextField, Button, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { ADD_TODO } from "../redux/actions";

export default function ToDoAdder() {
  const textFieldRef = useRef(null);
  const dispatch = useDispatch();
  const [title, setTitle] = useState(null);

  const textChangeHandler = (e) => {
    let { name, value } = e?.target;
    setTitle(value);
  };

  const addToDoHandler = () => {
    if (title) {
      dispatch({ type: ADD_TODO, payload: { title: title } });
      setTitle(null);
      textFieldRef.current.value = "";
    }
  };

  return (
    <Box>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={12}>
          <form>
            <TextField
              style={{ width: "45vw" }}
              name="todotitle"
              label="Add new todo"
              variant="filled"
              onChange={textChangeHandler}
              inputRef={textFieldRef}
            />
            <Button style={{ height: 55, marginLeft: 10 }} variant="contained" color="primary" onClick={addToDoHandler}>
              Add
            </Button>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
}
