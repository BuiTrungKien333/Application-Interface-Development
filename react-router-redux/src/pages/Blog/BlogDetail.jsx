import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BtnBack from "../../components/BtnBack";

function BlogDetail() {
  const params = useParams();
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
      const result = await response.json();

      setPost(result);
    };

    fetchData();
  }, []);

  return (
    <>
      <BtnBack />
      {post && (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )}
    </>
  );
}

export default BlogDetail;
