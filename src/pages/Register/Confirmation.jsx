import { Button } from "react-bootstrap";
import Axios from "axios";

function Confirmation({ formData, setPage }) {
  const { userEmail, userPassword, firstName, lastName, nation } = formData;

  const handleSubmit = async () => {
    try {
      const response = await Axios.post("http://localhost:3000", formData);
      console.log("Submission successful:", response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <>
      <p>Please confirm if the following details are correct.</p>
      <p>Email: {userEmail}</p>
      <p>Password: {userPassword}</p>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Nation: {nation}</p>
      <p>
        By creating an account, I agree to Hoe Trading's{" "}
        <u className="text-primary">
          Terms of <br /> Service
        </u>{" "}
        and <u className="text-primary">Privacy Policy</u>.
      </p>
      <div className="d-flex justify-content-center">
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
      </div>
    </>
  );
}

export default Confirmation;
