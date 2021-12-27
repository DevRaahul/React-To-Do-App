import React from "react";
import { useDispatch } from "react-redux";
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, Checkbox, Typography, IconButton } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import DeleteIcon from "@material-ui/icons/Delete";
import { TOGGLE_COMPLETED, DELETE_TODO, TOGGLE_IMPORTANT } from "../redux/actions";

function TodoItem({ id, title, important, completed }) {
  const dispatch = useDispatch();

  const markTodoCompleted = (e, id) => {
    dispatch({
      type: TOGGLE_COMPLETED,
      payload: {
        id,
      },
    });
  };

  const deleteTodoItem = (e, id) => {
    dispatch({
      type: DELETE_TODO,
      payload: {
        id,
      },
    });
  };

  const markImpTodo = (e, id) => {
    dispatch({
      type: TOGGLE_IMPORTANT,
      payload: {
        id,
      },
    });
  };

  return (
    <ListItem key={id} dense>
      <ListItemIcon>
        {important ? (
          <IconButton edge="start" size="small" onClick={(e) => markImpTodo(e, id)}>
            <StarIcon />
          </IconButton>
        ) : (
          <IconButton edge="start" size="small" onClick={(e) => markImpTodo(e, id)}>
            <StarBorderIcon />
          </IconButton>
        )}
      </ListItemIcon>
      <ListItemText>
        <Typography style={{ textDecoration: completed && "line-through" }}>{title}</Typography>
      </ListItemText>
      <ListItemSecondaryAction>
        <Checkbox edge="end" onChange={(e) => markTodoCompleted(e, id)} checked={completed} color="primary" />
        <IconButton edge="end" aria-label="delete" onClick={(e) => deleteTodoItem(e, id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
}

export default TodoItem;
