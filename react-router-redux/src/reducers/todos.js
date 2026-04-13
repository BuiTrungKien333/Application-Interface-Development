const init = [
  {
    id: 1,
    content: "công việc 1",
    complete: true,
  },
  {
    id: 2,
    content: "công việc 2",
    complete: false,
  },
  {
    id: 3,
    content: "công việc 3",
    complete: false,
  },
  {
    id: 4,
    content: "công việc 4",
    complete: true,
  },
];

const todosReducer = (state = init, action) => {
  let newState = [...state];
  switch (action.type) {
    case "CREATE":
      newState = [
        ...state,
        {
          id: Date.now(),
          content: action.content,
          complete: false,
        },
      ];
      return newState;
    case "DELETE":

    case "UNDO_COMPLETE":
      const index1 = newState.findIndex((item) => item.id === action.id);
      newState[index1].complete = false;
      return newState;

    case "COMPLETE":
      const index = newState.findIndex((item) => item.id === action.id);
      newState[index].complete = true;
      return newState;

    default:
      return state;
  }
};

export default todosReducer;
