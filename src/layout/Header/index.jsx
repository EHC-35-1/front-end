import { Link } from "react-router-dom";
import { FaCog } from "react-icons/fa"; // Import the settings icon from react-icons

// eslint-disable-next-line react/prop-types
function Header({ isDarkTheme, toggleTheme }) {
  const themeClass = isDarkTheme
    ? "navbar-dark bg-dark"
    : "navbar-light bg-light";

  return (
    <nav className={`navbar navbar-expand-lg ${themeClass}`}>
      <div className="container">
        {/* Settings Icon Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#settingsCollapse"
          aria-controls="settingsCollapse"
          aria-expanded="false"
          aria-label="Toggle settings"
        >
          <FaCog className="navbar-toggler-icon" />
        </button>

        {/* Your Logo */}
        <Link className="navbar-brand" to="/">
          Your Logo
        </Link>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
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
          </ul>
        </div>

        {/* Settings Collapse */}
        <div className="collapse navbar-collapse" id="settingsCollapse">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={toggleTheme}>
                Toggle Theme
              </button>
            </li>
            {/* Add other settings here, such as profile, etc. */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
