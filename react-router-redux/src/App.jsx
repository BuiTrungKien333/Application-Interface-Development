import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllRoutes from "./components/AllRoutes";
// import Counter from "./components/Counter";
// import Todos from "./components/Todos";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Error404 from "./pages/Error404";
// import LayoutDefault from "./layouts/Default";
// import Blog from "./pages/Blog";
// import BlogNew from "./pages/Blog/BlogNew";
// import BlogReleted from "./pages/Blog/BlogReleted";
// import BlogAll from "./pages/Blog/BlogAll";
// import BlogDetail from "./pages/Blog/BlogDetail";
// import UserProfile from "./pages/User";
// import Login from "./pages/Login";
// import PrivateRoutes from "./components/PrivateRoutes";

function App() {
  return (
    <>
      <AllRoutes />
      {/* <Routes>
        <Route path="/" element={<LayoutDefault />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="blog" element={<Blog />}>
            {/* Khi Route mà có chữ index, thì mình load thằng cha thì nó load luôn thằng con
          Ở đây khi mình ấn vô blog, thì nó hiển thị luôn cái con blogAll
          }
            <Route index element={<BlogAll />}></Route>
            <Route path="news" element={<BlogNew />}></Route>
            <Route path="releted" element={<BlogReleted />}></Route>
            <Route path=":id" element={<BlogDetail />}></Route>
          </Route>
          <Route element={<PrivateRoutes />}>
            <Route path="user" element={<UserProfile />}></Route>
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="*" element={<Error404 />}></Route>
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
