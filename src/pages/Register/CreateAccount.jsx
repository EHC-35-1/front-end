import React from "react";
import { Form, Button } from "react-bootstrap";

function CreateAccount({ formData, setFormData, setPage }) {
  return (
    <>
      <Form.Group className="mb-3" controlId="userEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Enter email"
          value={formData.userEmail}
          onChange={(event) =>
            setFormData({ ...formData, userEmail: event.target.value })
          }
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="userPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Password"
          value={formData.userPassword}
          onChange={(event) =>
            setFormData({ ...formData, userPassword: event.target.value })
          }
        />
      </Form.Group>

      <div className="d-flex justify-content-center">
        <Button
          className="mx-3"
          size="md"
          variant="primary"
          onClick={() => setPage((currPage) => currPage + 1)}
          style={{ width: "30%" }}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default CreateAccount;
