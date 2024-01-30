import { useState } from "react";
import Axios from "axios";
import { Form, Button } from "react-bootstrap";

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
                    />
                );
            case 1:
                return (
                    <UserInfo formData={formData} setFormData={setFormData} />
                );
            case 2:
                return <Confirmation formData={formData} />;
        }
    };

    const handleSubmit = async () => {
        try {
            const response = await Axios.post(
                "http://localhost:3000",
                formData
            );
            console.log("Submission successful:", response.data);
        } catch (error) {
            console.error("Error submitting form:", error);
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
                    <div className="d-flex justify-content-center">
                        <Button
                            className="mx-3"
                            size="md"
                            variant="secondary"
                            disabled={page === 0}
                            onClick={() => setPage((currPage) => currPage - 1)}
                            style={{ width: "30%" }}
                        >
                            Prev
                        </Button>
                        <Button
                            type={
                                page === FormTitles.length - 1
                                    ? "submit"
                                    : "button"
                            }
                            className="mx-3"
                            size="md"
                            variant="primary"
                            onClick={(event) => {
                                event.preventDefault();
                                if (page === FormTitles.length - 1) {
                                    handleSubmit();
                                } else {
                                    setPage((currPage) => currPage + 1);
                                }
                            }}
                            style={{ width: "30%" }}
                        >
                            {page == FormTitles.length - 1 ? "Confirm" : "Next"}
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    );
}

export default RegisterPage;
