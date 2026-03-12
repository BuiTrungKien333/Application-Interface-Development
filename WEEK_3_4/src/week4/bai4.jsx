import { useEffect, useState } from "react"

function Bai4() {

    const url = "https://jsonplaceholder.typicode.com/posts";''

    const [data, setData] = useState([]);

    const [search, setSearch] = useState('');

    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Error Network! Status: ${response.status}`);
                }

                const result = await response.json();

                console.log(result);

                setData(result);
                setFiltered(result);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
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
        return <div>
            User not found with userId: {userId}
        </div>
    }

    return (
        <>
            <div>
                <p>UserId: {userId}</p>
                <p>Name: {data.name}</p>
                <p>Phone: {data.phone}</p>
                <p>Website: {data.website}</p>
            </div>
        </>
    )


}

export default Bai4