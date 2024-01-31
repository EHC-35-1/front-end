import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { FaGoogle, FaApple } from "react-icons/fa"; // Import FontAwesome icons

function Login() {
  return (
    <div className="wrapper">
      <Form
        className="p-5 round bg-light text-center"
        style={{ width: "450px" }}
      >
        <h1 className="text-center mb-3 fw-bold">Log In</h1>
        <Form.Group className="mb-3" controlId="username">
          <Form.Control type="email" placeholder="Username" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Control type="password" placeholder="Enter Password" required />
        </Form.Group>
        <div className="text-center mt-3 mb-3">
          <a href="#">Forgot password?</a>
        </div>
        <div className="d-grid gap-2 mb-3">
          <Button variant="primary" size="md" type="submit">
            Log in
          </Button>
        </div>
        <div className="divider d-flex align-items-center my-4">
          <p className="text-center fw-bold mx-3 mb-0">OR</p>
        </div>
        <div className="d-grid-gap-2 mb-2">
          <Button variant="outline-danger" size="md" className="d-grid-center">
            <FaGoogle className="me-2" />{" "}
            <span className="text-center">Continue with Google</span>
          </Button>
        </div>
        <div className="d-grid-gap-2 mb-3">
          <Button variant="outline-dark" size="md" className="d-grid-center">
            <FaApple className="me-2" />{" "}
            <span className="text-center">Continue with Apple</span>
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Login;
