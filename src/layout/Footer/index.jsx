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
            <p>Email: support@langbiang.com</p>
            <p>Phone: +505 555 6789</p>
          </div>
          <div className="col-md-4">
            <h4>CONNECT WITH US</h4>
            <ul className="list-inline fs-3 text-white">
              <li className="list-inline-item px-2">
                <i className="bi bi-facebook"></i>
              </li>
              <li className="list-inline-item px-2">
                <i className="bi bi-linkedin"></i>
              </li>
              <li className="list-inline-item px-2">
                <i className="bi bi-youtube"></i>
              </li>
              <li className="list-inline-item px-2">
                <i className="bi bi-twitter"></i>
              </li>
              <li className="list-inline-item px-2">
                <i className="bi bi-instagram"></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
