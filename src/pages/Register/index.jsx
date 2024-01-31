import { useState } from "react";
import { Form } from "react-bootstrap";

import CreateAccount from "./CreateAccount";
import UserInfo from "./UserInfo";
import Confirmation from "./Confirmation";

import { useTheme } from "../../layout/ThemeContext";

function RegisterPage() {
  // Theme constants
  const { isDarkTheme } = useTheme();
  const themeClass = isDarkTheme
    ? "text-bg-dark bg-dark"
    : "text-bg-light bg-body";

  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
    firstName: "",
    lastName: "",
    nation: "",
  });

  const FormTitles = [
    "Create Account",
    "Personal Info",
    "Confirm your Details",
  ];

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return (
          <CreateAccount
            formData={formData}
            setFormData={setFormData}
            setPage={setPage}
          />
        );
      case 1:
        return (
          <UserInfo
            formData={formData}
            setFormData={setFormData}
            setPage={setPage}
          />
        );
      case 2:
        return <Confirmation formData={formData} setPage={setPage} />;
    }
  };

  return (
    <>
      <div
        className={`d-flex justify-content-center align-items-center 100-w 100-vh ${themeClass}`}
      >
        <Form
          className={`p-5 round bg-light ${themeClass}`}
          style={{ width: "500px" }}
        >
          <div className="text-center">
            <h1 className="fw-bold">{FormTitles[page]}</h1>
          </div>
          <div>{PageDisplay()}</div>
        </Form>
      </div>
    </>
  );
}

export default RegisterPage;
