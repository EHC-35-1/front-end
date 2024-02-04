import { useState } from "react";
import { Form } from "react-bootstrap";
import "./register.css";

import CreateAccount from "./CreateAccount";
import UserInfo from "./UserInfo";
import Confirmation from "./Confirmation";

function RegisterPage() {
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
      <div className="register__wrapper">
        <Form className="p-5 round bg-light" style={{ width: "450px" }}>
          <div className="text-center mb-3 fw-bold">
            <h1>{FormTitles[page]}</h1>
          </div>
          <div>{PageDisplay()}</div>
        </Form>
      </div>
    </>
  );
}

export default RegisterPage;
