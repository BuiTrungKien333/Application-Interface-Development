import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BlogAll() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://dummyjson.com/posts");
      const result = await response.json();

      setData(result.posts);
    };

    fetchData();
  }, []);

  return (
    <>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={"/blog/" + item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BlogAll;
