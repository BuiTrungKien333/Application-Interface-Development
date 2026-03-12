import { useEffect, useState } from "react";

function Bai4() {
  const url = "https://jsonplaceholder.typicode.com/posts";

  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Network error! Status: ${response.status}`);
        }

        const result = await response.json();

        setData(result);
        setFiltered(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const keyword = e.target.value;
    setSearch(keyword);

    const result = data.filter((item) =>
      item.title.toLowerCase().includes(keyword.toLowerCase()),
    );

    setFiltered(result);
  };

  return (
    <div>
      <h3>Fetch + Search + Filter</h3>

      <input
        type="text"
        placeholder="search"
        value={search}
        onChange={handleSearch}
      />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      <div>
        {filtered.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </div>
  );
}

export default Bai4;
