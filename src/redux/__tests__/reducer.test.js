import reducer from "../reducer";
jest.mock("../initial-state", () => {
  return {
    initialState: {
      todos: [],
    },
  };
});

describe("reducer tests", () => {
  beforeEach(() => {
    global.window = {
      localStorage: {
        setItem: jest.fn(),
      },
    };
  });

  afterEach(() => {
    global.window = null;
  });

  test("should add new todo item", () => {
    const initialState = {
      todos: [],
    };

    const action = {
      type: "ADD_TODO",
      payload: {
        title: "Test title",
      },
    };

    const newState = reducer(initialState, action);
    expect(newState.todos[0].title).toEqual("Test title");
    expect(newState.todos[0].completed).toBeFalsy();
    expect(newState.todos[0].important).toBeFalsy();
  });

  test("should mark the todo completed", () => {
    const initialState = {
      todos: [
        {
          id: 1,
          title: "mark completed test",
          completed: false,
          important: false,
        },
      ],
    };

    const action = {
      type: "TOGGLE_COMPLETED",
      payload: {
        id: 1,
      },
    };

    const newState = reducer(initialState, action);
    expect(newState.todos[0].completed).toBeTruthy();
  });

  test("should mark the todo important", () => {
    const initialState = {
      todos: [
        {
          id: 1,
          title: "mark completed test",
          completed: false,
          important: false,
        },
      ],
    };

    const action = {
      type: "TOGGLE_IMPORTANT",
      payload: {
        id: 1,
      },
    };

    const newState = reducer(initialState, action);
    expect(newState.todos[0].important).toBeTruthy();
  });

  test("should delete the todo", () => {
    const initialState = {
      todos: [
        {
          id: "1",
          title: "Todo test 1",
          completed: false,
          important: false,
        },
        {
          id: "2",
          title: "Todo test 2",
          completed: false,
          important: false,
        },
      ],
    };

    const action = {
      type: "DELETE_TODO",
      payload: {
        id: "1",
      },
    };

    const newState = reducer(initialState, action);
    expect(newState.todos.length).toBe(1);
  });

  test("should return default state when no action is matched", () => {
    const initialState = {
      todos: [
        {
          id: "1",
          title: "Todo test 1",
          completed: false,
          important: false,
        },
        {
          id: "2",
          title: "Todo test 2",
          completed: false,
          important: false,
        },
      ],
    };

    const action = {
      type: "RANDOM_ACTION",
      payload: {},
    };

    const newState = reducer(initialState, action);
    expect(newState.todos.length).toBe(2);
  });
});
