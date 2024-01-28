import { Card } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";

const GoogleCard = () => (
  <Card style={{ width: "80px" }} className="bg-dark">
    <Card.Body>
      <FcGoogle size={50} />
    </Card.Body>
  </Card>
);

export default GoogleCard;
