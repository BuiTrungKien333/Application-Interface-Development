import { Outlet } from "react-router-dom";

function Blog() {
  return (
    <div>
      <h1>Trang tin tức</h1>
      <Outlet />
    </div>
  );
}

export default Blog;
