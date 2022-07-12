import { useRouter } from "next/router";
import { useRef, useState } from "react";
import {
  FormContainer,
  FormInputs,
  FormTitle,
  GoToForm,
} from "../components/AuthForms/FormHelpers";
import { registerInputs } from "../components/AuthForms/InputFields";
import { setRegisteredUser, signup } from "../utils/auth";

const Register = () => {
  const router = useRouter();
  const formRef = useRef(null);
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const signupHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    if (
      email !== "" &&
      password !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      username !== ""
    ) {
      setErrorState(false);
      setErrorMessage("");
      const userCredential = await signup(email, password);
      await setRegisteredUser(
        userCredential.user.uid,
        firstName,
        lastName,
        username,
        email
      );
      router.push("/");
    } else {
      setErrorState(true);
      setErrorMessage("Please fill out all the fields!");
    }
  };

  return (
    <FormContainer
      ref={formRef}
      submitButtonText="Sign Up"
      submitHandler={signupHandler}
    >
      <GoToForm
        goToFormText="Already have an account? "
        goToFormUrl="/login"
        goToFormLinkText="Login"
      />
      <FormTitle
        titleText="Create your Penned accoubt"
        titleClasses="mb-[40px] max-w-[350px]"
      />
      <FormInputs inputs={registerInputs}>
        {errorState && <div className="error">{errorMessage}</div>}
      </FormInputs>
    </FormContainer>
  );
};

export default Register;
