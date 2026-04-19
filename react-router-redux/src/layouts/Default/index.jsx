import { NavLink, Outlet } from "react-router-dom";
import "./LayoutDefault.css";

function LayoutDefault() {
  return (
    <div className="layout-default">
      <header className="layout-default__header">
        <div className="layout-default__logo">Logo</div>
        <div className="layout-default__menu">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blog</NavLink>
              <ul>
                <li>
                  <NavLink to="/blog/news">Blog News</NavLink>
                </li>
                <li>
                  <NavLink to="/blog/releted">Blog Releted</NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink to="/user">User Profile</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Copyright @TrungKien</p>
      </footer>
    </div>
  );
}

export default LayoutDefault;
