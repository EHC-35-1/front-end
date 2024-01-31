import { Link } from "react-router-dom";
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
                <Link className="navbar-brand" to="/">
                    Your Logo
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
                    <ul className="navbar-nav">
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
                        <li className="nav-item" onClick={toggleTheme}>
                            <button className="nav-link">Toggle Theme</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
