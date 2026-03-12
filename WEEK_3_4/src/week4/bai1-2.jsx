import { useEffect, useState } from "react";

function Bai1_2() {
  console.log("render component");

  const url = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(url);

  //       if (!response.ok) {
  //         throw new Error(`Network error! Status: ${response.status}`);
  //       }

  //       const result = await response.json();

  //       setData(result);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error(`Network error: ${response.status}`);

        return response.json();
      })
      .then((result) => {
        setData(result);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>------------------</p>
        </div>
      ))}
    </div>
  );
}

export default Bai1_2;
