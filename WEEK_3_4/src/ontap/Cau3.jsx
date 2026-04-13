import { useEffect, useState } from "react";

export default function Bai3() {
  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApi = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      const data = await res.json();

      setData(data);
      setLoading(false);
    };

    fetchApi();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} style={{ backgroundColor: "gray" }}>
          <h3 style={{ color: "blue" }}>ID: {item.id}</h3>
          <p style={{ color: "orange" }}>Title: {item.title}</p>
          <p>Body: {item.body}</p>
        </div>
      ))}
    </div>
  );
}
