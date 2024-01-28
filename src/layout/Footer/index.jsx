import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-dark py-5 text-white">
      <div className="container">
        <div className="row text-center">
          <div className="col-md-4">
            <h4>Langbiang Farm</h4>
            <p>
              Experience the beauty of sustainable agriculture at Langbiang
              Farm, where we cultivate organic produce and promote eco-friendly
              farming practices.
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
            <ul className="list-inline fs-3 text-white">
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
