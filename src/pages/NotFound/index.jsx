import notFoundImage from "./Asserts/notFound.jpg";
const NotFoundPage = () => {
  return (
    <div className="container-fluid d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <img
          src={notFoundImage} // Replace with the path to your image
          alt="Not Found"
          className="img-fluid mb-4"
          style={{ width: "400px" }}
        />
        <h1 className="display-4 mb-3">
          Sorry, we couldn't find the page you're looking for.
        </h1>
        <p className="lead">
          It seems that the page you are trying to access does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
