import Form from "react-bootstrap/Form";

function CreateAccount({ formData, setFormData }) {
  return (
    <>
      <Form.Group className="mb-3" controlId="userEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
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
          type="password"
          placeholder="Password"
          value={formData.userPassword}
          onChange={(event) =>
            setFormData({ ...formData, userPassword: event.target.value })
          }
        />
      </Form.Group>
    </>
  );
}

export default CreateAccount;
