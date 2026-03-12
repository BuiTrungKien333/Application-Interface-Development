import { useEffect, useState } from "react";

function Bai3() {

    const [userId, setUserId] = useState(10);

    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

    const [data, setData] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (userId < 1 || userId > 10) {
                    throw new Error('UserId must 1 -> 10');
                }

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(`Error Network! Status: ${response.status}`);
                }

                const result = await response.json();

                console.log(result);

                setData(result);
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

export default Bai3