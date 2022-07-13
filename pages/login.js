import Link from "next/link";
import { useRef, useState } from "react";
import { signin } from "../utils/auth";
import { useRouter } from "next/router";
import {
  FormContainer,
  FormTitle,
  GoToForm,
  FormInputs,
} from "../components/helpers/FormHelpers";
import Email from '../assets/email.svg';
import Password from '../assets/password.svg';

const Login = () => {
  const router = useRouter();
  const formRef = useRef(null);
  const [errorState, setErrorState] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const signinHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const email = formData.get("email");
    const password = formData.get("password");
    signin(email, password)
      .then((userCredential) => {
        router.push("/");
        setErrorState(false);
        setErrorMessage("");
        console.log(userCredential.user);
      })
      .catch((err) => {
        setErrorState(true);
        setErrorMessage(err.message);
      });
  };

  const loginInputs = [
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
      submitButtonText="Sign In"
      submitHandler={signinHandler}
    >
      <GoToForm
        goToFormText="Don't have an account? "
        goToFormUrl="/register"
        goToFormLinkText="Register"
      />
      <FormTitle titleText="Login to Penned" titleClasses="mb-[40px]" />
      <FormInputs inputs={loginInputs}>
        {errorState && <div className="error">{errorMessage}</div>}
      </FormInputs>
      <Link href="/forgot-password">
        <a className="no-underline text-black cursor-pointer text-[14px] m-[16px_0_32px] border-b-[1px] border-solid border-transparent transition-colors duration-500 ease-in-out hover:border-[#303030]">
          Forgot your Password?
        </a>
      </Link>
    </FormContainer>
  );
};

export default Login;
