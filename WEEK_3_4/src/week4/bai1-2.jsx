import { useEffect, useState } from 'react'

function Bai1_2() {
  const url = "https://jsonplaceholder.typicode.com/users";

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Error Network! Status: ${response.status}`);
        }

        const result = await response.json();

        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}
    </div>
  }

  return (
    <>
      {
        data.map(item => {
          return <div>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </div>
        })
      }
    </>
  )
}

export default Bai1_2
