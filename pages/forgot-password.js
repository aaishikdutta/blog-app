import { useRef, useState } from "react";
import {
  FormContainer,
  FormInputs,
  FormTitle,
  GoToForm,
} from "../components/helpers/FormHelpers";
import Loader from "../components/Loader/Loader";
import Modal from "../components/Modal/Modal";
import { forgotPassword } from "../utils/auth";
import Email from '../assets/email.svg';

const ForgotPassword = () => {
  const formRef = useRef(null);
  const [isModal, setIsModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const forgotPasswordHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const email = formData.get("email");
    setIsLoading(true);
    forgotPassword(email)
      .then(() => {
        setModalMessage("If your account exists, you will receive a email");
        setIsLoading(false);
        setIsModal(true);
      })
      .catch((err) => {
        setModalMessage(err.message);
        setIsLoading(false);
        setIsModal(true);
      });
  };

  const modalCloseHandler = () => {
    setIsModal(false);
    formRef.current.reset();
  };

  const forgotPasswordInputs = [
    {
      type: "text",
      placeholder: "Email",
      name: "email",
      icon: Email,
    },
  ];

  return (
    <div className="relative">
      {isLoading && <Loader />}
      {isModal && (
        <Modal modalMessage={modalMessage} closeHandler={modalCloseHandler} />
      )}
      <FormContainer
        ref={formRef}
        submitButtonText="Reset"
        submitHandler={forgotPasswordHandler}
      >
        <GoToForm
          goToFormText="Back to "
          goToFormUrl="/login"
          goToFormLinkText="Login"
        />
        <FormTitle
          titleText="Reset Password"
          titleClasses="mb-[8px]"
          subtitleText="Forgot your password? Enter your email to reset it"
        />
        <FormInputs inputs={forgotPasswordInputs} />
      </FormContainer>
    </div>
  );
};

export default ForgotPassword;
