import { Link } from "react-router";

function Navbar() {
  return (
    <div className="navbar bg-base-300 shadow-md">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a>Club Information</a>
              <ul className="p-2">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <a>Leadership</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl">FRCC Outdoor Club</Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <details>
              <summary>Club Information</summary>
              <ul className="p-2">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <a>Leadership</a>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
