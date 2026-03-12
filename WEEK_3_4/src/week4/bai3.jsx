import { useEffect, useState } from "react";

function Bai3() {
  const [userId, setUserId] = useState(1);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setData(null);
        setError(null);

        if (userId < 1 || userId > 10) {
          throw new Error("User not found");
        }

        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
        );

        if (!response.ok) {
          throw new Error(`Error Network! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  return (
    <div>
      <h3>Fetch user</h3>

      <input
        type="number"
        value={userId}
        onChange={(e) => setUserId(Number(e.target.value))}
      />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {data && (
        <div>
          <p>UserId: {userId}</p>
          <p>Name: {data.name}</p>
          <p>Phone: {data.phone}</p>
          <p>Website: {data.website}</p>
        </div>
      )}
    </div>
  );
}

export default Bai3;
