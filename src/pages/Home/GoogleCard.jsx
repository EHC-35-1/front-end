import { Card } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { useTheme } from "~/layouts/ThemeContext";

function GoogleCard() {
    // eslint-disable-next-line no-unused-vars
    const { isDarkTheme, toggleTheme } = useTheme();
    const themeClass = isDarkTheme ? "bg-dark" : "bg-body";
    return (
        <>
            <Card style={{ width: "80px" }} className={themeClass}>
                <Card.Body>
                    <FcGoogle size={50} />
                </Card.Body>
            </Card>
        </>
    );
}

export default GoogleCard;
