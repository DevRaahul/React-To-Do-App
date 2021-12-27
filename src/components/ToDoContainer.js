import React from "react";
import { useSelector } from "react-redux";
import { Box, makeStyles, Grid, Typography, Divider, List } from "@material-ui/core";
import TodoItem from "./TodoItem";

const useStyles = makeStyles(() => ({
  root: {
    margin: 20,
    padding: 20,
    backgroundColor: "rgba(92.9%, 92.9%, 92.9%)",
  },
}));

export default function ToDoContainer() {
  const classes = useStyles();
  const { todos } = useSelector((state) => {
    return {
      todos: state.todos,
    };
  });

  const prioritisedTodos = (function priorities() {
    const impTodos = [];
    const notImpTodos = [];

    todos.forEach((todo) => {
      todo.important ? impTodos.push(todo) : notImpTodos.push(todo);
    });

    return [...impTodos, ...notImpTodos];
  })();

  return (
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography align="left" variant="h5" gutterBottom>
            My Todos
          </Typography>
          <Divider />
          <List>
            {prioritisedTodos.map((item) => {
              if (!item?.completed) {
                return <TodoItem {...item} />;
              } else {
                return null;
              }
            })}
          </List>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography align="left" variant="h5" gutterBottom>
            Completed
          </Typography>
          <Divider />
          <List>
            {prioritisedTodos.map((item) => {
              if (item?.completed) {
                return <TodoItem {...item} />;
              } else {
                return null;
              }
            })}
          </List>
        </Grid>
      </Grid>
    </Box>
  );
}
