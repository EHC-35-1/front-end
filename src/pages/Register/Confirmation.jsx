import { Button, Card, ListGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

function Confirmation({ formData, setPage }) {
  const { userEmail, userPassword, firstName, lastName, nation } = formData;
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await Axios.post("http://localhost:3000", formData);
      console.log("Submission successful:", response.data);

      // Redirect to the home page
      navigate("/");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <Card>
        <Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <p>Email: {userEmail}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Password: {userPassword}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>First name: {firstName}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Last name: {lastName}</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <p>Nation: {nation}</p>
            </ListGroup.Item>
          </ListGroup>

          <p>
            By creating an account, I agree to Methaptamin's{" "}
            <u className="text-primary">Terms of Service</u> and{" "}
            <u className="text-primary">Privacy Policy</u>.
          </p>
        </Card.Body>

        <Card.Footer className="d-flex justify-content-center">
          <Button
            className="mx-3"
            size="md"
            variant="secondary"
            onClick={() => setPage((currPage) => currPage - 1)}
            style={{ width: "30%" }}
          >
            Prev
          </Button>
          <Button
            type="submit"
            className="mx-3"
            size="md"
            variant="primary"
            onClick={(event) => {
              event.preventDefault();
              handleSubmit();
            }}
            style={{ width: "30%" }}
          >
            Confirm
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
}

export default Confirmation;
