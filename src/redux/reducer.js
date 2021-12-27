import shortid from "shortid";
import { ADD_TODO, DELETE_TODO, TOGGLE_COMPLETED, TOGGLE_IMPORTANT } from "./actions";
import initialState from "./initial-state";

const saveToLocalStorage = (state) => {
  window.localStorage.setItem("todoList", JSON.stringify(state));
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const newState = {
        ...state,
        todos: [
          ...state.todos,
          {
            id: shortid(),
            title: action?.payload?.title,
            important: false,
            completed: false,
          },
        ],
      };

      saveToLocalStorage(newState);
      return newState;
    }

    case TOGGLE_COMPLETED: {
      const updatedState = state.todos.map((data) => {
        if (data.id === action?.payload?.id) {
          data.completed = !data.completed;
        }
        return data;
      });
      const newState = {
        ...state,
        todos: updatedState,
      };
      saveToLocalStorage(newState);
      return newState;
    }

    case DELETE_TODO: {
      const updatedState = state.todos.filter((data) => data.id !== action?.payload?.id);
      const newState = {
        ...state,
        todos: updatedState,
      };

      saveToLocalStorage(newState);
      return newState;
    }

    case TOGGLE_IMPORTANT: {
      const updatedState = state.todos.map((data) => {
        if (data.id === action?.payload?.id) {
          data.important = !data.important;
        }
        return data;
      });
      const newState = {
        ...state,
        todos: updatedState,
      };

      saveToLocalStorage(newState);
      return newState;
    }
    default:
      return state;
  }
}

export default reducer;
