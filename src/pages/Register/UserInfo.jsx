import { Col, Form, Row, Button } from "react-bootstrap";

function UserInfo({ formData, setFormData, setPage }) {
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
          onClick={(event) => {
            event.preventDefault();
            setPage((currPage) => currPage + 1);
          }}
          style={{ width: "30%" }}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default UserInfo;
