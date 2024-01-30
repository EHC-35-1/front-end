function Confirmation(formData) {
  const { userEmail, userPassword, firstName, lastName, nation } =
    formData.formData;

  return (
    <>
      <p>Please confirm if the following details are correct.</p>
      <p>Email: {userEmail}</p>
      <p>Password: {userPassword}</p>
      <p>First name: {firstName}</p>
      <p>Last name: {lastName}</p>
      <p>Nation: {nation}</p>
      <p>
        By creating an account, I agree to Hoe Trading's{" "}
        <u className="text-primary">
          Terms of <br /> Service
        </u>{" "}
        and <u className="text-primary">Privacy Policy</u>.
      </p>
    </>
  );
}

export default Confirmation;
