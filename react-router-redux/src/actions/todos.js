export const createTodo = (content) => {
  return {
    type: "CREATE",
    content: content,
  };
};

export const deleteTodo = () => {
  return {
    type: "DELETE",
  };
};

export const completeTodo = (id) => {
  return {
    type: "COMPLETE",
    id: id,
  };
};

export const undoCompleteTodo = (id) => {
  return {
    type: "UNDO_COMPLETE",
    id: id,
  };
};
