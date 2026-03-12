import { useEffect, useState } from "react";

function Bai5() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const [loading, setLoading] = useState(true);
  const [submiting, setSubmiting] = useState(false);

  const [error, setError] = useState(null);

  // GET
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch(
          "https://jsonplaceholder.typicode.com/todos?_limit=10",
        );

        if (!res.ok) throw new Error("Failed to fetch todos.");

        const result = await res.json();
        setTodos(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  // POST
  const handleAdd = async (e) => {
    e.preventDefault();

    if (!newTodo.trim()) return;

    try {
      const url = "https://jsonplaceholder.typicode.com/todos";
      setSubmiting(true);
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newTodo,
          completed: false,
        }),
      });

      if (!res.ok) throw new Error("Failed to add todo");

      const data = await res.json();
      console.log(data);

      setTodos([data, ...todos]); // [data, todos[0], todos[1], todos[2]]
      //   setTodos([...todos, data]); // [todos[0], todos[1], todos[2], data]
      setNewTodo("");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmiting(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
        {
          method: "DELETE",
        },
      );

      if (!res.ok) throw new Error("Failed to delete");
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Todo CRUD</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bai5;
