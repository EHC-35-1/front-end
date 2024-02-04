import { Link } from "react-router-dom";
import { images } from "~/assets";
import { useTheme } from "../../ThemeContext";

// eslint-disable-next-line react/prop-types
function Header() {
  const { isDarkTheme, toggleTheme } = useTheme();
  const themeClass = isDarkTheme
    ? "navbar-dark bg-dark"
    : "navbar-light bg-light";

  return (
    <nav className={`navbar navbar-expand-lg ${themeClass}`}>
      <div className="container">
        <Link
          className="navbar-brand fw-bold fs-1"
          to="/"
          style={{ color: "#169bfa", display: "flex", alignItems: "center" }}
        >
          <img
            src={images.logo}
            alt="Logo"
            style={{ height: "40px", width: "40px", marginRight: "5px" }}
          />
          Crystal Swap
        </Link>

        {/* Settings Icon Button for Smaller Screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/trade">
                Trade
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/project">
                Our Project
              </Link>
            </li>
            <li className="nav-item" onClick={toggleTheme}>
              <button className="nav-link">Toggle Theme</button>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-success" to="/login">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-danger" to="/register">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
