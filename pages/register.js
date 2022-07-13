import { useRouter } from "next/router";
import { useRef, useState } from "react";
import {
  FormContainer,
  FormInputs,
  FormTitle,
  GoToForm,
} from "../components/helpers/FormHelpers";
import { setRegisteredUser, signup } from "../utils/auth";
import User from '../assets/user.svg';
import Email from '../assets/email.svg';
import Password from '../assets/password.svg';

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

  const registerInputs = [
    {
      type: "text",
      placeholder: "First Name",
      name: "firstName",
      icon: User,
    },
    {
      type: "text",
      placeholder: "Last Name",
      name: "lastName",
      icon: User,
    },
    {
      type: "text",
      placeholder: "Username",
      name: "username",
      icon: User,
    },
    {
      type: "text",
      placeholder: "Email",
      name: "email",
      icon: Email,
    },
    {
      type: "password",
      placeholder: "Password",
      name: "password",
      icon: Password,
    },
  ];

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
