import LayoutDefault from "../layouts/Default";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import BlogAll from "../pages/Blog/BlogAll";
import BlogNew from "../pages/Blog/BlogNew";
import BlogReleted from "../pages/Blog/BlogReleted";
import BlogDetail from "../pages/Blog/BlogDetail";
import UserProfile from "../pages/User";
import Login from "../pages/Login";
import Error404 from "../pages/Error404";
import PrivateRoutes from "../components/PrivateRoutes";

export const routes = [
  {
    path: "/",
    element: <LayoutDefault />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
        children: [
          {
            index: true,
            element: <BlogAll />,
          },
          {
            path: "news",
            element: <BlogNew />,
          },
          {
            path: "releted",
            element: <BlogReleted />,
          },
          {
            path: ":id",
            element: <BlogDetail />,
          },
        ],
      },
      {
        element: <PrivateRoutes />,
        children: [
          {
            path: "user",
            element: <UserProfile />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
];
