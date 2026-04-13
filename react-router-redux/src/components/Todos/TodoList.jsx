import { useDispatch, useSelector } from "react-redux";
import { completeTodo, undoCompleteTodo } from "../../actions/todos";

function TodoList() {
  const todoList = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();

  const handleComplete = (id) => {
    dispatch(completeTodo(id));
  };

  const handleUndoComplete = (id) => {
    dispatch(undoCompleteTodo(id));
  };

  return (
    <>
      {todoList && (
        <ul className="todo__list">
          {todoList.map((item) => (
            <li className="todo__item" key={item.id}>
              <span
                className={`todo__content ${item.complete ? "todo__content--complete" : ""}`}
              >
                {item.content}
              </span>
              {item.complete ? (
                <button onClick={() => handleUndoComplete(item.id)}>O</button>
              ) : (
                <button onClick={() => handleComplete(item.id)}>V</button>
              )}
              <button>X</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default TodoList;
