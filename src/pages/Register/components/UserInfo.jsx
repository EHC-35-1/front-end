import { Col, Form, Row } from "react-bootstrap";

function UserInfo({ formData, setFormData }) {
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
          />
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
          />
        </Form.Group>
      </Row>
      <Form.Group controlId="nation" className="mb-3">
        <Form.Label>Nation</Form.Label>
        <Form.Control
          required
          type="text"
          placeholder="Your nation"
          value={formData.nation}
          onChange={(event) =>
            setFormData({ ...formData, nation: event.target.value })
          }
        />
      </Form.Group>
    </>
  );
}

export default UserInfo;
