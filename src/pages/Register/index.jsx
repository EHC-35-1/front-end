import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useTheme } from "../../layout/ThemeContext";

const validateForm = (formData, setErrors) => {
  const validationErrors = {};

  if (!formData.email) {
    validationErrors.email = "Please enter a valid email";
  }

  if (!formData.password) {
    validationErrors.password = "Password is required";
  } else {
    const errors = [];
    const minPassLength = 12;

    if (formData.password.length < minPassLength) {
      errors.push("Password must be at least 12 characters long.");
    }
    // Password criteria checks
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const symbolRegex = /[@$!%*?&]/;

    if (!uppercaseRegex.test(formData.password)) {
      errors.push("The password must include an uppercase letter");
    }
    if (!lowercaseRegex.test(formData.password)) {
      errors.push("The password must include lowercase letters");
    }
    if (!digitRegex.test(formData.password)) {
      errors.push("The password must include a number");
    }
    if (!symbolRegex.test(formData.password)) {
      errors.push("The password must include a special symbol (@$!%*?&)");
    }
    if (errors.length > 0) {
      validationErrors.password = errors;
    }
  }

  if (Object.keys(validationErrors).length === 0) {
    // Form is valid, further actions can be performed
    console.log("Form submitted:", formData);
  } else {
    // Form is invalid, update the errors state
    setErrors(validationErrors);
  }
};

function RegisterPage() {
  // Theme constants
  const { isDarkTheme } = useTheme();
  const themeClass = isDarkTheme
    ? "text-bg-dark bg-dark"
    : "text-bg-light bg-body";
  // Form data and state management
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  // Form validation errors and state management
  const [errors, setErrors] = useState({});

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm(formData, setErrors);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <div
        className={`d-flex justify-content-center align-items-center 100-w 100-vh ${themeClass}`}
      >
        <Form
          className={`p-5 round bg-light ${themeClass}`}
          style={{ width: "500px" }}
          onSubmit={handleSubmit}
        >
          <h1 className="fw-bold">Create a free account</h1>
          {/* User's email input field */}
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          {/* User's password input field */}
          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password && typeof errors.password === "string" ? (
                // If errors.password is a string, render it as a plain span
                <span>{errors.password}</span>
              ) : (
                // If errors.password is defined and an array, render a list
                errors.password &&
                Array.isArray(errors.password) && (
                  <ul>
                    {errors.password.map((error, index) => (
                      <li key={index}>{error}</li>
                    ))}
                  </ul>
                )
              )}
            </Form.Control.Feedback>
          </Form.Group>
          <p>
            By creating an account, I agree to Hoe Trading's{" "}
            <u className="text-primary">
              Terms of <br /> Service
            </u>{" "}
            and <u className="text-primary">Privacy Policy</u>.
          </p>
          <div className="d-grid gap-2">
            <Button variant="primary" size="md" type="submit">
              Create Account
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default RegisterPage;
