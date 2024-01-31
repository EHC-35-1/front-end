import { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";

function UserInfo({ formData, setFormData, setPage }) {
  const [isFirstNameInvalid, setIsFirstNameInvalid] = useState(false);
  const [isLastNameInvalid, setIsLastNameInvalid] = useState(false);
  const [isNationInvalid, setIsNationInvalid] = useState(false);

  const handleNextClick = (event) => {
    event.preventDefault();

    if (
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.nation === ""
    ) {
      setIsFirstNameInvalid(formData.firstName.trim() === "");
      setIsLastNameInvalid(formData.lastName.trim() === "");
      setIsNationInvalid(formData.nation === "");
    } else {
      setIsFirstNameInvalid(false);
      setIsLastNameInvalid(false);
      setIsNationInvalid(false);
      setPage((currPage) => currPage + 1);
    }
  };

  return (
    <>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="firstName">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            value={formData.firstName}
            onChange={(event) =>
              setFormData({ ...formData, firstName: event.target.value })
            }
            isInvalid={isFirstNameInvalid}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your first name
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" controlId="lastName">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            value={formData.lastName}
            onChange={(event) =>
              setFormData({ ...formData, lastName: event.target.value })
            }
            isInvalid={isLastNameInvalid}
          />
          <Form.Control.Feedback type="invalid">
            Please enter your last name
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group controlId="nation" className="mb-3">
        <Form.Label>Nation</Form.Label>
        <Form.Select
          required
          value={formData.nation}
          onChange={(event) =>
            setFormData({ ...formData, nation: event.target.value })
          }
          isInvalid={isNationInvalid}
        >
          <option value="" disabled={formData.nation !== ""}>
            Select your nation
          </option>
          <option value="AUS">Australia</option>
          <option value="VN">Vietnam</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          Please select your nation
        </Form.Control.Feedback>
      </Form.Group>
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
          className="mx-3"
          size="md"
          variant="primary"
          onClick={handleNextClick}
          style={{ width: "30%" }}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default UserInfo;
