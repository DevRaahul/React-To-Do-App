const initialState = JSON.parse(window.localStorage.getItem("todoList")) || {
  todos: [
    { id: 0, title: "Learn HTML", important: false, completed: false },
    { id: 1, title: "Learn CSS", important: true, completed: true },
    { id: 2, title: "Learn Javascript", important: false, completed: false },
    { id: 3, title: "Learn React", important: false, completed: false },
    { id: 4, title: "Learn Redux", important: false, completed: true },
    { id: 5, title: "Learn Redux-Saga", important: false, completed: false },
  ],
};

export default initialState;
