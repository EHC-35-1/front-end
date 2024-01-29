import axios from "axios";
import { useTheme } from "../../../layout/ThemeContext";

function Newsletter() {
  // eslint-disable-next-line no-unused-vars
  const { isDarkTheme, toggleTheme } = useTheme();
  const themeClass = isDarkTheme
    ? "text-bg-dark bg-dark"
    : "text-bg-light bg-body";
  const handleSubmit = async (e) => {
    // eslint-disable-next-line no-unused-vars
    e.preventDefault();

    const email = document.getElementById("email").value;

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post("http://localhost:3000", {
        email,
      });
      //console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <form id="regEmail" onSubmit={handleSubmit}>
        <div className="form-group d-flex">
          <input
            type="email"
            className={`form-control ${themeClass}`}
            id="email"
            placeholder="Email"
          />
          <button type="submit" className="btn btn-warning ml-2">
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default Newsletter;
