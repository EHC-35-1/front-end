import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { useTheme } from "../../ThemeContext";

function Footer() {
  // eslint-disable-next-line no-unused-vars
  const { isDarkTheme, toggleTheme } = useTheme();
  const themeClass = isDarkTheme
    ? "text-bg-dark bg-secondary"
    : "text-bg-light bg-light";
  return (
    <footer className={`py-5 ${themeClass}`}>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <h4>Crystal Swap</h4>
            <p>
              Revolutionizing decentralized trading with Crystal Swap, where
              users experience seamless and secure transactions on our
              blockchain platform.
            </p>
          </div>
          <div className="col-md-4">
            <h4>CONTACT</h4>
            <p>308 Negra Arroyo Lane</p>
            <p>Albuquerque, New Mexico, 87104</p>
            <p>Email: support@tigertrader.com</p>
            <p>Phone: +505 555 6789</p>
          </div>
          <div className="col-md-4">
            <h4>CONNECT WITH US</h4>
            <ul className="list-inline fs-3">
              <li className="list-inline-item px-2">
                <FaFacebook />
              </li>
              <li className="list-inline-item px-2">
                <FaLinkedin />
              </li>
              <li className="list-inline-item px-2">
                <FaYoutube />
              </li>
              <li className="list-inline-item px-2">
                <FaTwitter />
              </li>
              <li className="list-inline-item px-2">
                <FaInstagram />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
