import axios from "axios";

function Newsletter() {
  const handleSubmit = async (e) => {
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
            className="form-control bg-dark"
            id="email"
            placeholder="Email"
          />
          <button type="submit" className="btn btn-primary ml-2">
            Register
          </button>
        </div>
      </form>
    </>
  );
}

export default Newsletter;
