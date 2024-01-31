import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function CreateAccount({ formData, setFormData, setPage }) {
  const [errors, setErrors] = useState({});

  const handleEmailInput = (event) => {
    const newEmail = event.target.value;
    setFormData((prevData) => ({ ...prevData, userEmail: newEmail }));
    validateEmail(newEmail);
  };

  const handlePasswordInput = (event) => {
    setFormData({ ...formData, userPassword: event.target.value });
    validatePassword();
  };

  const handlePasswordBlur = () => {
    validatePassword();
  };

  const validateEmail = (emailToValidate) => {
    const validationErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailToValidate || !emailRegex.test(emailToValidate)) {
      validationErrors.userEmail = "Please provide a valid email";
    } else {
      validationErrors.userEmail = undefined;
    }

    setErrors((prevErrors) => ({ ...prevErrors, ...validationErrors }));
  };
  const validatePassword = () => {
    const validationErrors = {};

    if (!formData.userPassword) {
      validationErrors.userPassword = "Password is required";
    } else {
      const passwordErrors = [];
      const minPassLength = 12;

      if (formData.userPassword.length < minPassLength) {
        passwordErrors.push("Password must be at least 12 characters long.");
      }
      // Password criteria checks
      const uppercaseRegex = /[A-Z]/;
      const lowercaseRegex = /[a-z]/;
      const digitRegex = /\d/;
      const symbolRegex = /[@$!%*?&]/;

      if (!uppercaseRegex.test(formData.userPassword)) {
        passwordErrors.push("The password must include an uppercase letter");
      }
      if (!lowercaseRegex.test(formData.userPassword)) {
        passwordErrors.push("The password must include lowercase letters");
      }
      if (!digitRegex.test(formData.userPassword)) {
        passwordErrors.push("The password must include a number");
      }
      if (!symbolRegex.test(formData.userPassword)) {
        passwordErrors.push(
          "The password must include a special symbol (@$!%*?&)"
        );
      }

      if (passwordErrors.length > 0) {
        validationErrors.userPassword = passwordErrors;
      } else {
        validationErrors.userPassword = undefined;
      }
    }

    setErrors((prevErrors) => {
      return { ...prevErrors, ...validationErrors };
    });
  };

  const handleNextClick = () => {
    validateEmail(formData.userEmail);
    validatePassword();

    if (
      // Check for blank fields
      !formData.userEmail ||
      !formData.userPassword ||
      // Check for email validation errors
      errors.userEmail !== undefined ||
      // Check for password validation errors
      (errors.userPassword !== undefined &&
        (typeof errors.userPassword === "string" ||
          errors.userPassword.length > 0))
    ) {
      return;
    } else {
      setPage((currPage) => currPage + 1);
    }
  };
  return (
    <>
      <Form.Group className="mb-3" controlId="userEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          type="email"
          placeholder="Enter email"
          value={formData.userEmail}
          onInput={handleEmailInput}
          isInvalid={!!errors.userEmail}
        />
        <Form.Control.Feedback type="invalid">
          {errors.userEmail}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="userPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Password"
          value={formData.userPassword}
          onInput={handlePasswordInput}
          onBlur={handlePasswordBlur}
          isInvalid={!!errors.userPassword}
        />
        <Form.Control.Feedback type="invalid">
          {errors.userPassword && typeof errors.userPassword === "string" ? (
            // Render error message as a plain span
            <span>{errors.userPassword}</span>
          ) : (
            // Render error message as a list
            errors.userPassword &&
            Array.isArray(errors.userPassword) && (
              <ul>
                {errors.userPassword.map((error, index) => (
                  <li key={index}>{error}</li>
                ))}
              </ul>
            )
          )}
        </Form.Control.Feedback>
      </Form.Group>

      <div className="d-flex justify-content-center">
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

export default CreateAccount;
